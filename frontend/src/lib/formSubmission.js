// Shared helpers for the contact and quote route handlers.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Escapes user text for the email body and keeps line breaks.
export function toHtmlParagraph(value) {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

// Returns the parsed JSON object, or null when the body is not a JSON object.
export async function readJsonObject(request) {
  try {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

// Picks the listed fields, keeping only trimmed strings up to maxLength.
// Any non-string value is treated as missing.
export function pickStrings(body, fields, maxLength = 5000) {
  const result = {};
  for (const field of fields) {
    const value = body[field];
    result[field] = typeof value === "string" ? value.trim().slice(0, maxLength) : "";
  }
  return result;
}

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value);
}

export function isValidPhone(value) {
  return value.replace(/\D/g, "").length >= 10;
}

// Outside production, a missing EMAIL_PASS simulates delivery for local testing.
// In production it is a configuration error: report failure instead of
// telling the visitor the message was sent when it was silently dropped.
export function canSimulateEmail() {
  return process.env.NODE_ENV !== "production";
}
