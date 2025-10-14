import { PageTitle } from "@/components/pageTitle/PageTitle";
import { ContactFilterBar } from "./components/ContactFilterBar";
import { ContactActionBar } from "./components/ContactActionBar";
import { ContactTable } from "./components/ContactTable";
import { Pagination } from "@/components/pagination/Pagination";

export const ContactList = () => {
  return (
    <>
      <PageTitle title="Thông tin liên hệ" />
      <ContactFilterBar />
      <ContactActionBar />
      <ContactTable />
      <Pagination />
    </>
  );
};
