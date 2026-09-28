"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "edukacuca:marketing-consent:v1";
const CONSENT_CHANGE_EVENT = "edukacuca:marketing-consent-changed";
const OPEN_PREFERENCES_EVENT = "edukacuca:open-marketing-preferences";
const META_SCRIPT_URL = "https://connect.facebook.net/en_US/fbevents.js";
const WHATSAPP_URL = "https://wa.me/5511926599367";

type Choice = "accepted" | "rejected" | null | "loading";
type MetaPixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  push?: MetaPixel;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixel;
    _fbq?: MetaPixel;
  }
}

function startPixel(pixelId: string) {
  if (window.fbq) return;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  }) as MetaPixel;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq ??= fbq;

  fbq("set", "autoConfig", false, pixelId);
  fbq("init", pixelId);

  const script = document.createElement("script");
  script.async = true;
  script.src = META_SCRIPT_URL;
  script.dataset.edukacucaMetaPixel = "true";
  document.head.appendChild(script);
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

function readConsent(): Choice {
  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

function serverConsent(): Choice {
  return "loading";
}

export function MarketingTracking({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const choice = useSyncExternalStore(subscribeToConsent, readConsent, serverConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const lastPageView = useRef<string | null>(null);
  const configured = /^\d{8,20}$/.test(pixelId);
  const onLanding = pathname === "/aulas";

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (!configured || choice !== "accepted" || !onLanding) {
      window.fbq?.("consent", "revoke");
      lastPageView.current = null;
      return;
    }

    startPixel(pixelId);
    window.fbq?.("consent", "grant");
    if (lastPageView.current !== pathname) {
      window.fbq?.("track", "PageView");
      lastPageView.current = pathname;
    }
  }, [choice, configured, onLanding, pathname, pixelId]);

  useEffect(() => {
    if (!configured || choice !== "accepted" || !onLanding) return;

    const trackContact = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (link?.href.startsWith(WHATSAPP_URL)) {
        window.fbq?.("track", "Contact", { content_name: "aulas_whatsapp" });
      }
    };

    document.addEventListener("click", trackContact, true);
    return () => document.removeEventListener("click", trackContact, true);
  }, [choice, configured, onLanding]);

  if (!configured || choice === "loading" || (!onLanding && !preferencesOpen)) return null;
  if (choice !== null && !preferencesOpen) return null;

  const saveChoice = (next: "accepted" | "rejected") => {
    const wasAccepted = choice === "accepted";
    window.localStorage.setItem(CONSENT_KEY, next);
    if (next === "rejected" && wasAccepted) {
      window.fbq?.("consent", "revoke");
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setPreferencesOpen(false);
  };

  return (
    <aside
      aria-label="Preferências de publicidade"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-accent/15 bg-white p-5 text-accent shadow-xl sm:p-6"
    >
      <h2 className="font-heading text-lg font-bold">Publicidade e privacidade</h2>
      <p className="mt-2 text-sm leading-relaxed text-accent/75">
        Com sua permissão, usamos o pixel da Meta nesta página para medir visitas
        e cliques no WhatsApp. Você pode recusar e continuar navegando. O
        diagnóstico e suas respostas não são enviados ao pixel. Leia a{" "}
        <Link href="/privacidade" className="font-semibold underline underline-offset-2">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => saveChoice("rejected")}
          className="rounded-lg border border-accent px-4 py-2.5 text-sm font-semibold hover:bg-accent/5"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => saveChoice("accepted")}
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Aceitar
        </button>
      </div>
    </aside>
  );
}

export function openMarketingPreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
