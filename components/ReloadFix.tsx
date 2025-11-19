"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ReloadFix() {
  const pathname = usePathname();

  useEffect(() => {
    // This forces the page to fully remount and re-run animations
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
