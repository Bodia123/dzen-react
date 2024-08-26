import { RootState } from "@/store/store";
import { FormattedDate } from "@/types/FormattedDate";
import formatDate from "@utils/date";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import logo from "@/assets/logo.png";

const TheHeader = () => {
  const { t, i18n } = useTranslation();
  const { locale } = useSelector((state: RootState) => state.locale);

  const connectedCount = useSelector(
    (state: RootState) => state.socket.activeTabs
  );

  const interval = useRef<number | null>(null);
  const [time, setTime] = useState<FormattedDate | null>(null);

  useEffect(() => {
    i18n.changeLanguage(locale);
    setTime(formatDate(locale));
    interval.current = window.setInterval(() => {
      const data = formatDate(locale);
      setTime(data);
    }, 10000);

    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
    };
  }, [i18n, locale]);

  return (
    <header className="row justify-content-end shadow">
      <div className="col-10 d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-between w-50">
          <img src={logo} width={40} alt="Logo" className="me-2" />
          <h5 className="m-0">INVENTORY</h5>
          <input
            type="text"
            className="d-none d-md-block form-control form-control-sm ms-auto w-50 rounded text-muted"
            placeholder={t("searchPlaceholder")}
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="me-3"></div>
          <div className="text-start">
            <p className="m-0">{time?.day}</p>
            <p className="m-0">{time?.specificDate}</p>
          </div>
          <div className="d-flex align-items-center text-end ms-3">
            <i className="bi bi-alarm text-success me-2"></i>
            <p className="m-0">{time?.time}</p>
          </div>
          <div className="text-end ms-3">
            <p className="m-0">
              {t("activePages")}: {connectedCount}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
