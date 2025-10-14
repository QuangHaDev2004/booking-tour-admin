import { PageTitle } from "@/components/pageTitle/PageTitle"
import { RoleActionBar } from "../components/RoleActionBar"
import { RoleTable } from "../components/RoleTable"

export const SettingRoleList = () => {
  return (
    <>
      <PageTitle title="Nhóm quyền" />
      <RoleActionBar />
      <RoleTable />
    </>
  )
}