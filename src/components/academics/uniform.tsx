import React from "react";
import Heading3 from "../heading3";
import Image from "next/image";

const Uniform = () => {
  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="School Uniform" />
      <div className="lg:p-10">
        <p className="text-gray-600">
          Students must come to the school in proper school uniform on all
          occasions. All students are required to wear school uniform as per the
          specifications given. Students must come to the school in proper
          school uniform on all occasions.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full lg:max-w-4xl mx-auto my-10 text-[#3B2565] border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="border-2 border-[#3B2565] py-3 px-5"></th>
                <th className="border-2 border-[#3B2565] py-3 px-5 bg-gray-300">
                  Summer Uniform
                </th>
                <th className="border-2 border-[#3B2565] py-3 px-5 bg-gray-300">
                  Winter Uniform
                </th>
                <th className="border-2 border-[#3B2565] py-3 px-5 bg-gray-300">
                  PT Uniform
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <div className="flex justify-center items-center rounded-full p-5 bg-gray-300">
                    <Image
                      src={"/assets/image/man (1).svg"}
                      alt="womenIcon"
                      width={150}
                      height={150}
                    />
                  </div>
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  Classes I to X - White Shirt (Short sleeves), Blue Black Pants and shorts for boys below 5' height, Black Shoes and blue black socks with stripes, Sardar Boys Dastar (Black).
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  Classes I to X - Worsted Grey Pants (Only for hill schools), White Shirt with School Tie, blue black pullover with school stripes, Blue Black Blazer with School Crest. Grey Woolen Socks and Black Shoes, Black dastar for Sardar Boys.
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
               Shirt house colour, pant/skirt blue black cotton, white tennis shoes and white socks.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <div className="flex justify-center items-center rounded-full p-5 bg-gray-300">
                    <Image
                      src={"/assets/image/man (2).svg"}
                      alt="womenIcon"
                      width={150}
                      height={150}
                    />
                  </div>
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  (Class I to X) - Blue Black Skirt and White blouse. Black Shoes and Blue Black socks with stripes, Black ribbon.
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  (Class I to X) - Worsted grey skirt (Only for hill schools) white blouse with school tie. Blue black pullover with school stripes, Blue Black Blazer with School Crest, Woolen Stocking and black Shoes, Black ribbon.
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <td className="border-2 border-[#3B2565] py-3 px-5">
               Shirt house colour, pant/skirt blue black cotton, white tennis shoes and white socks.
                </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Uniform;
