import React from "react";

export default function Footer() {
  const data = [
    {
      head: "COMPANY",
      subs: ["About", "Pricing", "Careers"],
    },
    {
      head: "SOLUTIONS",
      subs: ["Search", "Connect", "Research", "Academy"],
    },
    {
      head: "RESOURCES",
      subs: ["Blogs", "Forms"],
    },
    {
      head: "SUPPORT",
      subs: ["Help", "Contact Us"],
    },
    {
      head: "LEGAL",
      subs: ["Privacy", "Terms", "Accessibility"],
    },
  ];
  const socials = ["../fb.png", "../ig.png", "../linkedin.png", "../wp.png"];
  return (
    <>
      <div
        className="p-5 text-white px-16"
        style={{
          background: "linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%)",
        }}
      >
        <div className="flex flex-wrap justify-around pt-5">
          <div className="md:w-[100%]">
            <img src="../logo-white.png" alt="logo" />
            <p>
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          {data.map((dat, index) => {
            return (
              <div key={index} className="w-[100%] lg:w-[10%] md:w-[20%]">
                <p className="font-semibold text-lg mb-4">{dat.head}</p>
                {dat.subs.map((foo, index) => {
                  return (
                    <a key={index} className="block my-2 text-md " href="/">
                      {foo}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="bg-white w-full h-[1px] my-6"></div>
        <div className="flex flex-wrap justify-between my-5 gap-4">
          <p className="text-md">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex gap-4 items-center">
            {socials.map((soc, index) => {
              return (
                <a key={index}>
                  <img src={soc} alt="sgs" className="h-[1.3rem]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-5">
        <p className="text-center text-lg text-white">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </>
  );
}
