// /lib/db.js
import { db } from "./firebase"; // ✅ Import the initialized Firestore
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

// --- Collections ---
const masksCol = collection(db, "masks");
const logsCol = collection(db, "logs");

// --- Helper Functions ---

// Save a new mask
export async function saveMask(maskData) {
  try {
    const docRef = await addDoc(masksCol, maskData);
    return docRef.id;
  } catch (err) {
    console.error("Error saving mask:", err);
    throw err;
  }
}

// Get mask by token
export async function getMaskByToken(token) {
  try {
    const q = query(masksCol, where("token", "==", token));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const docSnap = snapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() };
  } catch (err) {
    console.error("Error fetching mask:", err);
    throw err;
  }
}

// Add verification log
export async function addVerificationLog(logData) {
  try {
    const docRef = await addDoc(logsCol, logData);
    return docRef.id;
  } catch (err) {
    console.error("Error adding verification log:", err);
    throw err;
  }
}

// Get logs for a specific token
export async function getLogsByToken(token) {
  try {
    const q = query(logsCol, where("token", "==", token));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching logs:", err);
    throw err;
  }
}

// Optional: check if token expired
export function isExpired(expiresAt) {
  const expiryDate = expiresAt.toDate ? expiresAt.toDate() : expiresAt;
  return new Date() > expiryDate;
}
