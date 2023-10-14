import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ThreeCircles } from "react-loader-spinner";
import Footer from "./Footer";
export default function UserProfile() {
  const { username } = useParams();
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState();
  const [recusers, setRecusers] = useState();
  const fetchdata = () => {
    setIsloading(true);
    fetch(`https://mcs-backend-jgo8.onrender.com/api/v1/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.response);
        setRecusers(data.rec);
        setIsloading(false);
      });
  };
  useEffect((id) => {
    fetchdata();
  }, []);

  return (
    <>
      <div>
        <div className="border-b px-10">
          <Navbar />
        </div>
        <div>
          {isloading ? (
            <div className="min-h-[90vh] flex items-center justify-center">
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </div>
          ) : (
            <>
              <div>
                {data ? (
                  <>
                    <div className="flex flex-wrap  md:gap-10 my-10 px-5 gap-5 lg:px-28">
                      <div className="lg:max-w-[40%] md:max-w-[50%]">
                        <p className="font-bold text-4xl">{data.name}</p>
                        <p className="text-xl py-3">{data.intro}</p>
                        <div className="flex gap-1 items-center">
                          <img
                            src="../star.png"
                            alt="star"
                            className="h-[1rem]"
                          />
                          <p className="text-xl">
                            <span className="text-sky-600 font-bold">
                              {data.rating}
                            </span>
                            ({data.reviewCount})
                          </p>
                        </div>
                        <div className="p-5 px- my-5 rounded-lg shadow-md border">
                          <div className="flex justify-between">
                            <p className="font-semibold text-lg">
                              {data.taskComplexity}
                            </p>
                            <p className="font-bold">{data.price}</p>
                          </div>
                          <div className="flex gap-1 items-center mt-5">
                            <img
                              src="../cal.png"
                              alt="cal"
                              className="h-[1.5rem]"
                            />
                            <p className="text-xl font-semibold">
                              {data.deliveryTime}
                            </p>
                          </div>
                          <div className="flex items-center  gap-4 mt-5">
                            <button className="bg-sky-600 p-2 px-12 rounded-lg font-bold text-white">
                              Request Proposal
                            </button>
                            <button className="border border-sky-600 p-2 px-16 rounded-lg font-bold text-sky-500">
                              Chat with me
                            </button>
                          </div>
                        </div>
                        <div className="border shadow-lg rounded-lg  p-5">
                          <p className="text-2xl font-bold ">
                            What people say?
                          </p>
                          <p className="text-xl mt-2">
                            {data.testimonial.text}
                          </p>
                          <p className="text-right text-xl text-gray-500">
                            -{data.testimonial.author}
                          </p>
                        </div>
                      </div>
                      <div className="lg:w-[55%]">
                        <img
                        src="../anti.png"
                          // src={data.image}
                          alt="user-image"
                          className="rounded-lg h-[20rem] object-cover w-[100%]"
                        />
                        <p className="font-bold text-4xl my-5">
                          About {data.name}
                        </p>
                        <div className="flex items-center justify-between flex-wrap">
                          <div className="font-semibold">
                            <p className="text-gray-500 ">FROM</p>
                            <p className="mt-2">{data.about.from}</p>
                          </div>
                          <div className="font-semibold">
                            <p className="text-gray-500 ">PARTNER SINCE</p>
                            <p className="mt-2">{data.about.partnerSince}</p>
                          </div>
                          <div className="font-semibold">
                            <p className="text-gray-500 ">
                              AVERAGE RESPONSE TIME
                            </p>
                            <p className="mt-2">
                              {data.about.averageResponseTime}
                            </p>
                          </div>
                        </div>
                        <div className="font-semibold mt-8">
                          <p className="text-gray-500 ">ABOUT</p>
                          <p className="mt-2">{data.about.description}</p>
                        </div>
                        <div className="flex justify-between flex-wrap gap-5 font-semibold mt-5">
                          <div>
                            <p className="text-gray-500">SERVICES I OFFER</p>
                            <ul className="list-disc flex flex-col px-5 pt-3">
                              {data.about.services.map((ser, index) => {
                                return (
                                  <li className="" key={index}>
                                    {ser}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-500">WHY ME?</p>
                            <ul className="list-disc flex flex-col px-5 pt-3">
                              {data.about.benefits.map((ser, index) => {
                                return (
                                  <li className="" key={index}>
                                    {ser}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-center font-bold text-xl">
                      No CA's found with name {username}
                    </p>
                  </>
                )}
                <div className="px-5 lg:px-28 mt-10">
                  <p className="font-bold text-3xl">Recommended for you</p>
                  <div className="flex flex-wrap justify-evenly gap-2 my-10">
                    {recusers?.map((user, index) => {
                      return (
                        <div
                          key={index}
                          className="border shadow-lg rounded-lg hover:shadow-2xl w-[25rem]"
                        >
                          <img
                          src="../anti.png"
                            // src={user?.image}
                            alt="user-image"
                            className="rounded-lg w-[25rem]"
                          />
                          <div className="px-5 my-5">
                            <div className="flex justify-between font-bold text-xl">
                              <p>{user.name}</p>
                              <p>{user.price}</p>
                            </div>
                            <p>{user.intro}</p>
                            <div className="flex gap-1 items-center my-2">
                              <img
                                src="../star.png"
                                alt="star"
                                className="h-[1rem]"
                              />
                              <p className="text-md">
                                <span className="text-sky-600 font-bold">
                                  {user.rating}
                                </span>
                                ({user.reviewCount})
                              </p>
                            </div>
                            <a href={`/user/${user.name}`}>
                              <button className="mt-5 font-bold text-white p-2 w-full bg-sky-600 rounded-lg">
                                View services
                              </button>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Footer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
