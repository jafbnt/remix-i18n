import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "~/ChangeLanguageButton";


export default function () {
  
  let { t } = useTranslation();


  return (
    <div>
      <h1>{t("greeting")}</h1>
      <ChangeLanguageButton></ChangeLanguageButton>
    </div>
  );
}
