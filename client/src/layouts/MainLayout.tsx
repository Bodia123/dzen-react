import TheHeader from "@components/TheHeader";
import TheSideBar from "@components/TheSidebar";
import React, { Suspense } from "react";

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <TheHeader />
      <main className="row flex-fill">
        <div className="col-2 p-0" style={{ backgroundColor: "#F0F3F5" }}>
          <TheSideBar />
        </div>

        <div className="col-10 p-4">
          <Suspense fallback={<></>}>{children}</Suspense>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
