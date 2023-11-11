import React from "react";

function FirstContent() {
  return (
    <div className="relative">
      <div className=" absolute left-10 top-[350px] uppercase text-white">
        <p className="leading-10 text-[20px] tracking-wide font-extralight">
          {" "}
          Upcoming Launch{" "}
        </p>
        <h1 className="flex flex-col text-[45px] font-bold">
          Transporter-9 <span>Mission</span>
        </h1>
        <button
          className="border-2 py-3 px-16 hover:bg-white hover:text-black hover:transition-transform  ease-in duration-300"
          type="button"
        >
          WATCH
        </button>
      </div>
    </div>
  );
}

export default FirstContent;
