import { Jost, Zilla_Slab } from "next/font/google";
import { ReadingProgress } from "@/components/ReadingProgress";
import "./para.css";

// Same type family as the Caderno de Campo series art (Rockwell-like slab + Futura-like geometric).
const display = Zilla_Slab({
  variable: "--font-adv-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Jost({
  variable: "--font-adv-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ParaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <ReadingProgress />
      {children}
    </div>
  );
}
