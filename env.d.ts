interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SECRET_KEY: string,
    readonly VITE_FORM_SERVICE: string
    readonly VITE_FORM_TEMPLATE: string,
    readonly VITE_FORM_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }