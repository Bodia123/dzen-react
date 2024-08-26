import { useTranslation } from "react-i18next";

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h3 className="mb-5">{t("loading")}...</h3>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">{t("loading")}...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
