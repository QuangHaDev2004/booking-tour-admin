import { PageTitle } from "@/components/pageTitle/PageTitle";
import { ContactFilterBar } from "./components/ContactFilterBar";
// import { ContactActionBar } from "./components/ContactActionBar";
import { ContactTable } from "./components/ContactTable";
// import { Pagination } from "@/components/pagination/Pagination";

export const ContactList = () => {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Thông tin liên hệ" />
      </div>
      <ContactFilterBar />
      {/* <ContactActionBar /> */}
      <ContactTable />
      {/* <Pagination /> */}
    </>
  );
};
