import { db } from "../../../lib/firebaseAdmin";
import { isExpired, toJSDate } from "../../../lib/token";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      token,
      verifierName = "Verifier",
      verifierOrg = "Organization",
    } = req.body || {};
    const cleanToken = String(token || "").trim();

    if (!cleanToken)
      return res.status(400).json({ error: "token is required" });

    const docRef = db.collection("masks").doc(cleanToken);
    const snap = await docRef.get();

    if (!snap.exists) {
      return res
        .status(404)
        .json({ valid: false, status: "invalid", message: "Token not found" });
    }

    const data = snap.data();
    const expired = isExpired(data.expiresAt);
    const status = expired ? "expired" : "valid";

    await docRef.collection("logs").add({
      verifierName,
      verifierOrg,
      timestamp: new Date(),
      result: status,
    });

    return res.status(200).json({
      valid: !expired,
      status,
      expiresAt: toJSDate(data.expiresAt),
      message: "Identity protected",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
}
