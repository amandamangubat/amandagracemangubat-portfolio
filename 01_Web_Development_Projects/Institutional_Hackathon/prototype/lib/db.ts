import { db } from "./firebaseAdmin";

export type MaskRecord = {
  token: string;
  createdAt: Date;
  expiresAt: Date;
  status: "active" | "expired" | "revoked";
  purpose: string;
  tokenType: string;
  label?: string;
};

export async function saveMask(mask: MaskRecord) {
  await db.collection("masks").doc(mask.token).set(mask);
}

export async function getMask(token: string) {
  const snap = await db.collection("masks").doc(token).get();
  return snap.exists ? (snap.data() as MaskRecord) : null;
}

export async function addLog(token: string, log: any) {
  // subcollection logs under each mask doc
  await db.collection("masks").doc(token).collection("logs").add(log);
}

export async function getLogs(token: string) {
  const snap = await db
    .collection("masks")
    .doc(token)
    .collection("logs")
    .orderBy("timestamp", "desc")
    .limit(50)
    .get();

  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
