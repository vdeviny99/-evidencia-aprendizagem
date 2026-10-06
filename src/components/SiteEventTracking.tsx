"use client";

import { useEffect } from "react";

const WHATSAPP_HOST = "wa.me";
const WHATSAPP_NUMBER = "5511926599367";

type SiteEventType = "diagnostic_free_click" | "whatsapp_click";

function sendSiteEvent(type: SiteEventType) {
  const payload = JSON.stringify({ type, path: window.location.pathname });

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    navigator.sendBeacon("/api/site-event", blob);
    return;
  }

  void fetch("/api/site-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

function isFreeDiagnosticLink(link: HTMLAnchorElement) {
  return link.pathname === "/diagnostico/captura";
}

function isEdukaCucaWhatsappLink(link: HTMLAnchorElement) {
  try {
    const url = new URL(link.href);
    return url.hostname === WHATSAPP_HOST && url.pathname.includes(WHATSAPP_NUMBER);
  } catch {
    return false;
  }
}

export function SiteEventTracking() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      if (isFreeDiagnosticLink(link)) {
        sendSiteEvent("diagnostic_free_click");
        return;
      }

      if (isEdukaCucaWhatsappLink(link)) {
        sendSiteEvent("whatsapp_click");
      }
    };

    document.addEventListener("click", trackClick, true);
    return () => document.removeEventListener("click", trackClick, true);
  }, []);

  return null;
}
