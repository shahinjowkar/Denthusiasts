import { Container } from "@mui/material";
import React from "react";

export default function Body() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0 ">
      <div className=" px-10 space-y-5 ">
        <h1 className="text-6xl max-w-xl font-serif">
          {/* <span className="underline decoration-black decoration-4">
            medium
          </span>{' '} */}
          Having a Blog is better than not having a Blog
        </h1>
        <h2>It's about the journey not destination</h2>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt=""
      />
    </div>
  );
}
