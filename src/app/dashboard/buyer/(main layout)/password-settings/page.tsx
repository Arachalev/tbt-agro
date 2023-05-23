import React from "react";

import PasswordSettingsForm from "@/components/Forms/DashboardForms/PasswordSettingsForm";

const Page = () => {
  return (
    <div className="pt-8 px-4 md:px-6 xl:px-12 pb-40">
      <h4 className="mb-16 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Password Settings
      </h4>
      <div className="md:pl-6 xl:pl-10">
        <PasswordSettingsForm />
      </div>
    </div>
  );
};

export default Page;
