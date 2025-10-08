import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { ActionBarUser } from "./ActionBarUser";
import { FilterBarUser } from "./FilterBarUser";
import { UserTable } from "./UserTable";

export const UserList = () => {
  return (
    <>
      <PageTitle title="Quản lý người dùng" />
      <FilterBarUser />
      <ActionBarUser />
      <UserTable />
      <Pagination />
    </>
  );
};
