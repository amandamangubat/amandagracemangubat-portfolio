import crypto from "crypto";

export function generateToken() {
  const part1 = crypto.randomBytes(3).toString("hex").toUpperCase();
  const part2 = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `MX-${part1}-${part2}`;
}

export function getExpiryDate(minutes = 10) {
  return new Date(Date.now() + minutes * 60 * 1000);
}

// ✅ Add this helper (Firestore Timestamp support)
export function toJSDate(value: any): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value.toDate === "function") return value.toDate(); // Firestore Timestamp
  return new Date(value);
}

export function isExpired(expiresAt: any) {
  const d = toJSDate(expiresAt);
  if (!d) return true;
  return d.getTime() <= Date.now();
}
