import React from "react";
import JoinCards from "./JoinCards";

export default function Join() {
  return (
    <>
      <div className="my-20   join-cards" style={{backgroundImage:"url(../bluebg.png)"}}>
        <div>
          <p className="text-center font-bold text-5xl">
            Want to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0076CE 0%, #9400D3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join
            </span>{" "}
            Us?
          </p>
          <p className="font-semibold text-xl text-center my-4">
            To remain with us, it is essential that you dilligently follow the
            steps provided
          </p>

          <JoinCards />
        </div>
      </div>
    </>
  );
}
