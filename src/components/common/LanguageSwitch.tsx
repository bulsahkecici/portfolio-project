"use client";
import { usePathname, useRouter } from "next/navigation";
import type { Route } from "next";
import Cookies from "js-cookie";
import Image from "next/image";

const locales = [
  { 
    code: "en", 
    label: "English",
    flagPath: "/images/flags/en.svg"
  },
  { 
    code: "tr", 
    label: "Türkçe",
    flagPath: "/images/flags/tr.svg"
  },
  { 
    code: "de", 
    label: "Deutsch",
    flagPath: "/images/flags/de.svg"
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
      {locales.map(({ code, flagPath, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={`transition-all hover:scale-110 flex items-center justify-center w-8 h-6 flex-shrink-0 rounded-md overflow-hidden border border-gray-300 dark:border-gray-600 ${
            current === code 
              ? "opacity-100 scale-105 ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900" 
              : "opacity-60 hover:opacity-80"
          }`}
          title={label}
        >
          <Image
            src={flagPath}
            alt={`${label} flag`}
            width={32}
            height={24}
            className="w-full h-full object-cover"
            unoptimized
          />
        </button>
      ))}
    </div>
  );
}
