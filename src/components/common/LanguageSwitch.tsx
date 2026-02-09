"use client";
import { usePathname, useRouter } from "next/navigation";
import type { Route } from "next";
import Cookies from "js-cookie";

const locales = [
  { 
    code: "en", 
    label: "English",
    flag: (
      <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path fillOpacity=".7" d="M-85.3 0h682.6v512h-682.6z"/>
          </clipPath>
        </defs>
        <g clipPath="url(#a)" transform="translate(80) scale(.94)">
          <g strokeWidth="1pt">
            <path fill="#006" d="M-256 0H768v512H-256z"/>
            <path fill="#fff" d="M-256 0H768v170.7H-256zM-256 341.3H768V512H-256z" fillRule="evenodd"/>
            <path fill="#fff" d="M-256 0H0v512h256V0z" fillRule="evenodd"/>
            <path fill="#c00" d="M-256 0H768v102.4H-256zM-256 409.6H768V512H-256z" fillRule="evenodd"/>
            <path fill="#c00" d="M-256 0H0v512h256V0z" fillRule="evenodd"/>
            <path fill="#fff" d="M-256 204.8H768v102.4H-256z" fillRule="evenodd"/>
            <path fill="#c00" d="M-256 204.8H768v51.2H-256z" fillRule="evenodd"/>
            <path fill="#fff" d="M-256 0H0v170.7h256V0z" fillRule="evenodd"/>
            <path fill="#fff" d="M-256 341.3H0V512h256V341.3z" fillRule="evenodd"/>
            <path fill="#c00" d="M-256 0H0v102.4h256V0z" fillRule="evenodd"/>
            <path fill="#c00" d="M-256 409.6H0V512h256v-102.4z" fillRule="evenodd"/>
            <path d="M-170.7 0v512M0 85.3v341.4M-85.3 0v512M0 0v512" stroke="#fff" strokeWidth="68.3" fill="none"/>
            <path d="M-170.7 0v512M0 85.3v341.4" stroke="#c00" strokeWidth="51.2" fill="none"/>
          </g>
        </g>
      </svg>
    )
  },
  { 
    code: "tr", 
    label: "Türkçe",
    flag: (
      <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#e30a17" d="M0 0h640v480H0z"/>
          <g fill="#fff" transform="translate(213.3 240)">
            <circle r="53.3"/>
            <circle r="45.3" fill="#e30a17"/>
            <path d="m-26.7-1.5 8.5 2.1-8.5 2.1 2.1-8.5-2.1-8.5zm21.3 0 8.5 2.1-8.5 2.1 2.1-8.5-2.1-8.5z" fill="#fff"/>
          </g>
        </g>
      </svg>
    )
  },
  { 
    code: "de", 
    label: "Deutsch",
    flag: (
      <svg className="w-5 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000" d="M0 0h640v160H0z"/>
        <path fill="#d00" d="M0 160h640v160H0z"/>
        <path fill="#ffce00" d="M0 320h640v160H0z"/>
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
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      {locales.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={`transition-all hover:scale-110 flex items-center justify-center ${
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
