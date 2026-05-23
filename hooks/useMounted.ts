"use client";

import { useEffect, useState } from "react";

/** Avoid hydration mismatch for theme-dependent UI */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
