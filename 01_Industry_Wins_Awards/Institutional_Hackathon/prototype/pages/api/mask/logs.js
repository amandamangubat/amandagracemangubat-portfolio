import { db } from "../../../lib/firebaseAdmin";
import { toJSDate } from "../../../lib/token";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const token = String(req.query.token || "").trim();
    if (!token) return res.status(400).json({ error: "token is required" });

    const docRef = db.collection("masks").doc(token);
    const snap = await docRef.get();

    if (!snap.exists) return res.status(404).json({ error: "Token not found" });

    const logsSnap = await docRef
      .collection("logs")
      .orderBy("timestamp", "desc")
      .limit(50)
      .get();

    const logs = logsSnap.docs.map((d) => {
      const x = d.data();
      return {
        id: d.id,
        verifierName: x.verifierName,
        verifierOrg: x.verifierOrg,
        result: x.result,
        timestamp: toJSDate(x.timestamp),
      };
    });

    return res.status(200).json({ token, logs });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
}
