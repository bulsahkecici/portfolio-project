export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (!GA_ID) return;
  
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// Type definition for gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: { [key: string]: any }
    ) => void;
    dataLayer?: any[];
  }
}

