"use client";

export function CurrentYear() {
  return <span id="currentYear">{new Date().getFullYear()}</span>;
}
