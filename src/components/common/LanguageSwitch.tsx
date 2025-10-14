"use client";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const locales = ["en","tr","de"] as const;

export default function LanguageSwitch(){
  const pathname = usePathname() || "/en";
  const router = useRouter();
  const parts = pathname.split("/");
  const current = locales.includes(parts[1] as any) ? parts[1] : "en";

  function switchTo(loc: string){
    Cookies.set("locale", loc, { expires: 365 });
    parts[1] = loc;
    router.push(parts.join("/") || "/");
  }

  return (
    <select aria-label="Select language" value={current} onChange={(e)=>switchTo(e.target.value)} className="border rounded px-2 py-1">
      {locales.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
    </select>
  );
}

