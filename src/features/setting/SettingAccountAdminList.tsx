import { PageTitle } from "@/components/pageTitle/PageTitle";
import { Pagination } from "@/components/pagination/Pagination";
import { AccountAdminFilterBar } from "./components/AccountAdminFilterBar";
import { AccountAdminActionBar } from "./components/AccountAdminActionBar";
import { AccountAdminTable } from "./components/AccountAdminTable";

export const SettingAccountAdminList = () => {
  return (
    <>
      <PageTitle title="Tài khoản quản trị" />
      <AccountAdminFilterBar />
      <AccountAdminActionBar />
      <AccountAdminTable />
      <Pagination />
    </>
  );
};
