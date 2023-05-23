import React from "react";

import Footer from "../Footer";
import SubmitSuccessful from "../Forms/DashboardForms/SubmitSuccessful";

interface SubmitSuccessfulProps {
  href: string;
}

const SubmitSuccessfulPage = ({ href }: SubmitSuccessfulProps) => {
  return (
    <main className="fixed top-0 right-0 h-screen w-screen z-[1000] bg-gray2">
      <SubmitSuccessful href=""/>
      <div >
        <Footer />
      </div>
    </main>
  );
};

export default SubmitSuccessfulPage;
