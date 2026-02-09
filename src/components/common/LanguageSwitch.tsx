"use client";
import { usePathname, useRouter } from "next/navigation";
import type { Route } from "next";
import Cookies from "js-cookie";

const locales = [
  { 
    code: "en", 
    label: "English",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="2" fill="#012169"/>
        <path d="M0 0h3v2H0z" fill="#fff"/>
        <path d="M0 0l3 2M3 0L0 2" stroke="#C8102E" strokeWidth="0.2"/>
        <path d="M0 .67h3M0 1.33h3" stroke="#fff" strokeWidth="0.2"/>
        <path d="M1.5 0v2" stroke="#fff" strokeWidth="0.2"/>
        <path d="M0 .67h3M0 1.33h3M1.5 0v2" stroke="#C8102E" strokeWidth="0.1"/>
      </svg>
    )
  },
  { 
    code: "tr", 
    label: "Türkçe",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="2" fill="#E30A17"/>
        <circle cx="1.5" cy="1" r="0.4" fill="#fff"/>
        <circle cx="1.5" cy="1" r="0.35" fill="#E30A17"/>
        <path d="M1.2 0.7l0.3 0.1-0.3 0.1 0.1-0.3-0.1-0.3zm0.6 0l0.3 0.1-0.3 0.1 0.1-0.3-0.1-0.3z" fill="#fff"/>
      </svg>
    )
  },
  { 
    code: "de", 
    label: "Deutsch",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="0.67" fill="#000"/>
        <rect y="0.67" width="3" height="0.67" fill="#D00"/>
        <rect y="1.33" width="3" height="0.67" fill="#FFCE00"/>
      </svg>
    )
  }
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
    <div className="flex items-center gap-1.5" role="group" aria-label="Language selector">
      {locales.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={`transition-all hover:scale-110 flex items-center justify-center w-8 h-6 rounded overflow-hidden border border-gray-300 dark:border-gray-600 ${
            current === code 
              ? "opacity-100 scale-110 ring-2 ring-blue-500" 
              : "opacity-60 hover:opacity-80"
          }`}
          title={label}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
