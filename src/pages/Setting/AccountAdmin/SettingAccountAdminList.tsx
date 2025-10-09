import { PageTitle } from "../../../components/pageTitle/PageTitle"
import { Pagination } from "../../../components/pagination/Pagination"
import { AccountAdminTable } from "./AccountAdminTable"
import { ActionBarAccountAdmin } from "./ActionBarAccountAdmin"
import { FilterBarAccountAdmin } from "./FilterBarAccountAdmin"

export const SettingAccountAdminList = () => {
  return (
    <>
      <PageTitle title="Tài khoản quản trị" />
      <FilterBarAccountAdmin />
      <ActionBarAccountAdmin />
      <AccountAdminTable />
      <Pagination />
    </>
  )
}