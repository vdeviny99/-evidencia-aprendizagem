"use client";

import { usePathname } from "next/navigation";

const immersiveRoutes = new Set([
  "/diagnostico/captura",
  "/diagnostico/teste",
  "/diagnostico/resultado",
]);

// The free deliverable owns its entire viewport. Public editorial pages retain
// the site navigation; route changes restore it without a separate application.
export function SiteFrame({ children, header, footer }: { children: React.ReactNode; header: React.ReactNode; footer: React.ReactNode }) {
  const pathname = usePathname();
  const immersive = immersiveRoutes.has(pathname.replace(/\/$/, ""));
  return <>
    {!immersive && header}
    <main data-experience={immersive ? "immersive" : "editorial"} className="flex-1">{children}</main>
    {!immersive && footer}
  </>;
}
