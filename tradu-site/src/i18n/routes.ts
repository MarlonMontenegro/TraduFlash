export type Lang = "es" | "en";

export const SITE_URL = "https://traduflashsv.com";

/**
 * Mapa de rutas equivalentes por idioma.
 * Clave = "ruta base" (sin /es o /en), SIEMPRE con trailing slash.
 */
export const ROUTES_MAP: Record<string, { es: string; en: string }> = {
  "/": { es: "/es/", en: "/en/" },

  "/traducciones-en-vivo/": {
    es: "/es/traducciones-en-vivo/",
    en: "/en/live-translation/",
  },

  "/traduccion-paginas-web/": {
    es: "/es/traduccion-paginas-web/",
    en: "/en/website-translation/",
  },

  "/sobre-nosotros/": {
    es: "/es/sobre-nosotros/",
    en: "/en/about-us/",
  },

  "/cotizacion/": {
    es: "/es/cotizacion/",
    en: "/en/quote/",
  },
};
