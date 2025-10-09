import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { ActionBarContact } from "./ActionBarContact";
import { ContactTable } from "./ContactTable";
import { FilterBarContact } from "./FilterBarContact";

export const ContactList = () => {
  return (
    <>
      <PageTitle title="Thông tin liên hệ" />
      <FilterBarContact />
      <ActionBarContact />
      <ContactTable />
      <Pagination />
    </>
  );
};
