
import Sessions from "@/components/academics/sessions";
import TransferCertificate from "@/components/academics/transfer-certificate";
import Uniform from "@/components/academics/uniform";
import Banner from "@/components/banner";
import ToppersResult from "@/components/home/toppers-result";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Academics"
        description="Beershiva - Chaukhutiya"
        source="/assets/image/C C.jpg"
      />
           <ToppersResult />
      <Sessions />
      <Uniform />
      {/* <TransferCertificate /> */}
    </>
  );
};

export default page;
