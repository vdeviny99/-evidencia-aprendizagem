"use client";

import { openMarketingPreferences } from "@/components/MarketingTracking";

export function PrivacyPreferencesButton() {
  return (
    <button
      type="button"
      onClick={openMarketingPreferences}
      className="text-zinc-400 underline underline-offset-2 hover:text-gold"
    >
      Preferências de publicidade
    </button>
  );
}
