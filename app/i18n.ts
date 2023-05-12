export default {
    // This is the list of languages your application supports
    supportedLngs: ["en", "pt-BR"],
    // This is the language you want to use in case
    // if the user language is not in the supportedLngs
    fallbackLng: "pt-BR",
    // The default namespace of i18next is "translation", but you can customize it here
    defaultNS: "system",
    // Disabling suspense is recommended
    react: { useSuspense: false },
  };