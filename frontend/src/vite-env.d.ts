/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  // Define aquí tus variables de entorno personalizadas
  readonly VITE_API_BASE_URL: string;
  // Más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
