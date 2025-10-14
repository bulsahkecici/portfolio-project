"use client";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "./seo-default";

export function Providers({ children }:{children:React.ReactNode}){
  return (<>
    <DefaultSeo {...defaultSEO}/>
    {children}
  </>);
}

