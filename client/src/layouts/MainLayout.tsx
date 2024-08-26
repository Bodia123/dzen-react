import LoadingPage from "@/views/LoadingPage";
import TheHeader from "@components/TheHeader";
import TheSideBar from "@components/TheSidebar";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <TheHeader />
      <main className="row flex-fill">
        <div className="col-2 p-0" style={{ backgroundColor: "#F0F3F5" }}>
          <TheSideBar />
        </div>

        <div className="col-10 p-4">
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
