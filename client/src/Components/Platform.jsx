import React from "react";

export default function Platform() {
  const data = [
    {
      image: "../search-icon.png",
      high: "SEARCH",
      txt: "for vital company information",
    },
    {
      image: "../connect-icon.png",
      high: "CONNECT",
      txt: "with the resources to meet your business needs",
    },
    {
      image: "../research-icon.png",
      high: "RESEARCH",
      txt: "and generate reports that drive growth",
    },
    {
      image: "../academy-icon.png",
      high: "ACADEMY",
      txt: "to give you the skills for success in your career",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center px-8 pb-20">
        <div className="lg:max-w-[40%]">
          <p className="font-bold text-5xl">
            <span
              style={{
                background: "linear-gradient(90deg, #0076CE 0%, #9400D3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              All-in-One
            </span>{" "}
            platform
          </p>
          <p className="font-bold text-5xl">that makes Easier</p>
          <p className="font-semibold text-2xl my-8">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
          <div className="flex flex-wrap justify-between gap-8">
            {data.map((dat, index) => {
              return (
                <div className="flex gap-5 max-w-[17rem]" key={index}>
                  <img src={dat.image} alt="icon" className="h-[4rem]" />
                  <p className="text-2xl">
                    <span className="font-bold">{dat.high}</span> {dat.txt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img src="../platform.png" alt="student-teacher" className="h-full" />
        </div>
      </div>
    </>
  );
}
