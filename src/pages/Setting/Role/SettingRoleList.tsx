import { PageTitle } from "../../../components/pageTitle/PageTitle"
import { ActionBarRole } from "./ActionBarRole"
import { RoleTable } from "./RoleTable"

export const SettingRoleList = () => {
  return (
    <>
      <PageTitle title="Nhóm quyền" />
      <ActionBarRole />
      <RoleTable />
    </>
  )
}