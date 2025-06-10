import { poppins } from "@/utils/font";
import { Link } from "lucide-react";
import React from "react";

const TopHeader = () => {
  return (
    <div
      className={`${poppins.className} bg-primary flex justify-between items-center flex-col lg:flex-row text-white py-1 px-5 lg:px-10 text-xs lg:text-sm font-medium`}
    >
      <div className="flex gap-2 lg:gap-5 flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <img src="/assets/image/email.svg" alt="email" />
          <p>beershiva05school@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/assets/image/call.svg" alt="call" />
          <p>+91 81262 17345</p>
        </div>
      </div>
      <div className="lg:flex gap-5 hidden">
        <p>
          <Link href="/registeration">Online Registration</Link>
        </p>
        <p>|</p>
        <p>Chaukhutia</p>
      </div>
    </div>
  );
};

export default TopHeader;
