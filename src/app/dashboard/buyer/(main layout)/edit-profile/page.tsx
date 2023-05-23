import ProfileDetailsForm from "@/components/Forms/DashboardForms/ProfileDetailsForm";
import React from "react";

const Page = () => {
  return (
    <div className="pt-8 px-4 md:px-6 xl:px-12 pb-40">
      <h4 className="mb-16 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Profile Details
      </h4>
      <div className="md:pl-6 xl:pl-10">
        <ProfileDetailsForm />
      </div>
    </div>
  );
};

export default Page;
