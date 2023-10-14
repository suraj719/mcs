import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Join from "./Join";
import Navbar from "./Navbar";
import Platform from "./Platform";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
        }}
      >
        <Navbar />
        <div className="flex justify-evenly items-center flex-wrap py-20">
          <div className="p-2">
            <p className="font-bold text-5xl">
              Find{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #0076CE 0%, #9400D3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Partners
              </span>{" "}
              (CAs)
            </p>
            <p className="font-bold text-5xl">available online</p>
            <p className="text-justify max-w-[25rem] text-lg mt-3">
              <span className="text-gray-700">CONNECT</span> with us where your
              services are listed and visible to a myriad of businesses seeking
              CA's for compliance support
            </p>
            <div className="flex mt-5 w-full items-stretch">
              <input
                className="border p-2 px-5 rounded-l-xl outline-none w-[18rem]"
                type="search"
                placeholder="Search by name"
                onChange={(e) => setName(e.target.value)}
              />
              {name ? (
                <>
                  <Link to={`/user/${name}`}>
                    <button className="bg-blue-500 p-2 px-8 rounded-r-lg text-white font-bold">
                      Search
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <button className="bg-blue-500 p-2 px-8 rounded-r-lg text-white font-bold">
                    Search
                  </button>
                </>
              )}
            </div>
          </div>
          <div>
            <img src="../home-1.png" alt="home-banner" className="w-[30rem]" />
          </div>
        </div>
      </div>
      <Join />
      <Platform />
      <Footer />
    </>
  );
}
