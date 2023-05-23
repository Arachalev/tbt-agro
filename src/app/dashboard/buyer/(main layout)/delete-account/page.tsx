import React from "react";

import DeleteAccountForm from "@/components/Forms/DashboardForms/DeleteAccountForm";
import SubmitSuccessfulPage from "@/components/SubmitSuccessful";

const Page = () => {
  return (
    <div className="pt-8 px-4 md:px-6 xl:px-12 pb-40">
      <div className="mb-8">
        <h4 className="mb-2 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          We hate to see you go
        </h4>
        <p className="text-sm text-agro-green md:w-1/2">
          Before you delete your account, we would want you to know that this
          action will delete your data across all TBT platforms. If that&apos;s
          what you want, please proceed with entering your password to confirm
          that it&apos;s you.
        </p>
      </div>
      <div className="md:pl-6 xl:pl-10">
        <DeleteAccountForm />
      </div>
    </div>
  );
};

export default Page;
