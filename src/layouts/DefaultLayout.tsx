import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sider/Sidebar";

export const DefaultLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />

      {/* Sider */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main */}
      <div className="absolute top-[70px] left-0 h-[calc(100%-70px)] w-full px-[15px] py-[30px] sm:p-[30px] lg:left-60 lg:w-[calc(100%-240px)]">
        <Outlet />
      </div>
    </>
  );
};
