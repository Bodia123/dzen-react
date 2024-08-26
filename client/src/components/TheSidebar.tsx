import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import svgSetting from "@/assets/settings-svgrepo-com.svg";
import facePhoto from "@/assets/faceSideBar.png";

const TheSidebar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const settingClick = () => {
    navigate("/settings");
  };

  const setActiveClassName = ({ isActive }: { isActive: boolean }) =>
    [
      isActive ? "activeRouterLink" : "",
      "nav-link",
      "text-center",
      "text-dark",
    ].join(" ");

  return (
    <div className="sidebar p-0 pt-5 mb-auto">
      <div className="d-flex align-items-center justify-content-center ">
        <div className="avatarContainer">
          <img
            src={facePhoto}
            alt="User Avatar"
            className="avatar"
            width={80}
          />
          <img
            src={svgSetting}
            alt="Settings Icon"
            role="button"
            className="settingsIcon pointer"
            onClick={settingClick}
          />
        </div>
      </div>
      <nav className="nav flex-column mt-4">
        <NavLink to="/" className={setActiveClassName}>
          {t("incoming")}
        </NavLink>
        <NavLink to="/groups" className={setActiveClassName}>
          {t("groups")}
        </NavLink>
        <NavLink to="/products" className={setActiveClassName}>
          {t("products")}
        </NavLink>
        <NavLink to="/users" className={setActiveClassName}>
          {t("users")}
        </NavLink>
        <NavLink to="/settings" className={setActiveClassName}>
          {t("settings")}
        </NavLink>
      </nav>
    </div>
  );
};

export default TheSidebar;
