import { setLocale } from "@/store/slices/localeSlice";
import { RootState } from "@/store/store";
import { SupportedLanguages } from "@/types/Languages";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const LanguageToggler: React.FC = () => {
  const { t, i18n } = useTranslation();
  const locale = useSelector((state: RootState) => state.locale.locale);
  const dispatch = useDispatch();

  const setLang = (lang: SupportedLanguages) => {
    i18n.changeLanguage(lang);
    dispatch(setLocale(lang));
  };

  return (
    <div className="btn-group" role="group" aria-label="Language switch">
      <button
        type="button"
        className={
          `btn btn-outline-primary ` + (locale === "eng" ? "active" : "")
        }
        id="englishBtn"
        onClick={() => setLang("eng")}>
        {t("englishLang")}
      </button>
      <button
        type="button"
        className={
          `btn btn-outline-primary ` + (locale === "ru" ? "active" : "")
        }
        id="russianBtn"
        onClick={() => setLang("ru")}>
        {t("russianLang")}
      </button>
    </div>
  );
};

export default LanguageToggler;
