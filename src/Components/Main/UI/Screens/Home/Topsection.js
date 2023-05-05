import React from "react";
const Topsection = () => {
  return (
    <>
      <div className="w-[100vw] h-[60vh] flex flex-col grid place-items-center md:flex-row px-10 banner">
        <div className="w-full grid place-items-center text-white">
        <div className="backdrop-blur-md">
          <div className="text-4xl font-bold pt-14 px-10 text-center">Welcome to </div>
          <div>
            <p className="w-[80vw] md:w-full text-4xl md:text-7xl font-black pb-14 px-10 text-center">Movie Dekho</p>{" "}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topsection;
