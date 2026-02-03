"use client";
import { usePathname, useRouter } from "next/navigation";
import type { Route } from "next";
import Cookies from "js-cookie";

const locales = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" }
] as const;

export default function LanguageSwitch(){
  const pathname = usePathname() || "/en";
  const router = useRouter();
  const parts = pathname.split("/");
  const current = locales.find(l => l.code === parts[1])?.code || "en";

  function switchTo(loc: string){
    Cookies.set("locale", loc, { expires: 365 });
    parts[1] = loc;
    const nextPath = parts.join("/") || "/";
    router.push(nextPath as Route);
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      {locales.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={`text-2xl transition-all hover:scale-110 ${
            current === code 
              ? "opacity-100 scale-110" 
              : "opacity-50 hover:opacity-75"
          }`}
          title={label}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
