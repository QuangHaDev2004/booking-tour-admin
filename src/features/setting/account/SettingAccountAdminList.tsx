import { PageTitle } from "@/components/pageTitle/PageTitle"
import { AccountAdminFilterBar } from "../components/AccountAdminFilterBar"
import { AccountAdminActionBar } from "../components/AccountAdminActionBar"
import { AccountAdminTable } from "../components/AccountAdminTable"
import { Pagination } from "@/components/pagination/Pagination"


export const SettingAccountAdminList = () => {
  return (
    <>
      <PageTitle title="Tài khoản quản trị" />
      <AccountAdminFilterBar />
      <AccountAdminActionBar />
      <AccountAdminTable />
      <Pagination />
    </>
  )
}