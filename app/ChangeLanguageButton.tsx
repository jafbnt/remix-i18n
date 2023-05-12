import React from "react";
import { useTranslation } from "react-i18next";

function ChangeLanguageButton() {
  const { i18n } = useTranslation();


  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('pt-BR')}>pt-BR</button>
    </div>
  );
}

export default ChangeLanguageButton;
