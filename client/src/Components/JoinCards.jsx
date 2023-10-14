import React from "react";

export default function JoinCards() {
  const data = [
    {
      number: {
        rank: 1,
        sups: "st",
      },
      title: "Commencement of business",
      description:
        "Invested shareholders must confirm payment and office address",
      dueDate: "within 180 days",
      penaltyFee: [
        {
          fee: "₹50000",
          desc: "for the company",
        },
        {
          fee: "₹1000",
          desc: " /day for directors",
        },
      ],
    },

    {
      number: {
        rank: 2,
        sups: "nd",
      },
      title: "Auditor Appointment",
      description: "Company informs new auditor and submits ADT.1 form to ROC.",
      dueDate: "within 30 days",
      penaltyFee: [
        {
          fee: "₹300",
          desc: "per month",
        },
      ],
    },
    {
      number: {
        rank: 3,
        sups: "rd",
      },
      title: "DIN eKYC",
      description:
        "Directors share personal information for identification & verification ",
      dueDate: "Every Year",
      penaltyFee: [
        {
          fee: "₹5000",
          desc: "one time",
        },
      ],
    },
    {
      number: {
        rank: 4,
        sups: "th",
      },
      title: "DPT-3",
      description:
        "Companies report money taken from people to ROC; auditors confirm details.",
      dueDate: "within 30 days",
      penaltyFee: [
        {
          fee: "₹300",
          desc: "per month",
        },
      ],
    },
    {
      number: {
        rank: 5,
        sups: "th",
      },
      title: "MCA Form AOC-4",
      description:
        "It's like an official report card for a company's documents",
      dueDate: "On or Before 30th November",
      penaltyFee: [
        {
          fee: "₹200",
          desc: "per day",
        },
        {
          desc: " (No upper limit)*",
        },
      ],
    },
    {
      number: {
        rank: 6,
        sups: "th",
      },
      title: "MCA Form MGT-7",
      description:
        "Companies must annually report activities and finances to the registrar.",
      dueDate: "On or Before 31st Decemnber",
      penaltyFee: [
        {
          fee: "₹200",
          desc: "per day",
        },
        {
          desc: " (No upper limit)*",
        },
      ],
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-10">
          {data.map((card, index) => {
            return (
              <div key={index} className="max-w-[27rem] bg-white rounded-lg">
                <div className="z-10">
                  <span
                    className="rounded-lg p-2 text-white font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg, #0076CE 0%, #9400D3 100%)",
                    }}
                  >
                    {card.number.rank}
                    <sup>{card.number.sups}</sup>
                  </span>
                </div>
                <div className="-mt-5 shadow-x hover:shadow-2xl  flex flex-col justify-center items-center p-5 py-6 rounded-2xl">
                  <p className="font-bold text-2xl text-center">{card.title}</p>
                  <p className="text-lg text-center">{card.description}</p>
                  <div className="bg-gray-100 p-5 flex flex-wrap justify-between rounded-lg gap-5 my-3 w-[90%] h-[8rem]">
                    <div className="max-w-[33%]">
                      <p className="text-blue-500 text-xl font-bold mb-2">
                        Due date
                      </p>
                      <p>{card.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-bold text-xl mb-2">
                        Penalty fees
                      </p>
                      {card.penaltyFee.map((penalty, index) => {
                        return (
                          <p key={index} className="mb-1">
                            <span className="underline text-gray-900 font-bold">
                              {penalty.fee}
                            </span>{" "}
                            {penalty.desc}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="px-16 md:px-24 pt-8 text-lg font-semibold">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you don't file the form for a year, you will owe
          ₹73,000 per form
        </p>
      </div>
    </>
  );
}
