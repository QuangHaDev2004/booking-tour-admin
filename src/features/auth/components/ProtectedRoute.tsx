import { pathAdmin } from "@/config/path";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { accessToken, account, loading, refresh, fetchMe } = useAuthStore();
  const [starting, setStarting] = useState(true); // ngăn chặn redirect sớm khi f5

  const init = async () => {
    if (!accessToken) {
      await refresh();
    }

    if (accessToken && !account) {
      await fetchMe();
    }

    setStarting(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (starting || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Đang tải trang...
      </div>
    );
  }

  if (!accessToken) {
    return <Navigate to={`/${pathAdmin}/account/login`} replace />;
  }

  return children;
};
