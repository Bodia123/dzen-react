import LanguageToggler from "@components/LanguageToggler";
import { useTranslation } from "react-i18next";

const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container p-5">
      <h1 className="mb-5 text-center">{t("settingsPageTitle")}</h1>
      <div className="mb-5 text-center">
        <LanguageToggler />
      </div>
    </div>
  );
};

export default SettingsPage;
