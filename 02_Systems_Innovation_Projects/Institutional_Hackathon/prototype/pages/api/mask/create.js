import { db } from "../../../lib/firebaseAdmin";
import { generateToken, getExpiryDate } from "../../../lib/token";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      purpose = "Verification",
      tokenType = "Privacy Mask",
      label,
    } = req.body || {};

    // Generate unique token (retry a few times)
    let token = generateToken();
    for (let i = 0; i < 5; i++) {
      const snap = await db.collection("masks").doc(token).get();
      if (!snap.exists) break;
      token = generateToken();
    }

    const createdAt = new Date();
    const expiresAt = getExpiryDate(10);

    await db
      .collection("masks")
      .doc(token)
      .set({
        token,
        createdAt,
        expiresAt,
        status: "active",
        purpose,
        tokenType,
        label: label || null,
      });

    return res.status(200).json({
      token,
      expiresAt,
      qrValue: token,
      message: "Mask created",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
}
