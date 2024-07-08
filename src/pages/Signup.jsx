import React from "react";
import SignupImage from "../assets/signupimage.png";

const Signup = () => {
  return (
    <div>
      <div className="flex  h-screen font-nunito">
        <div className="w-1/2 h-full relative">
          <div className="h-full flex flex-col justify-center absolute left-[50%] translate-x-[-50%]">
            <h1 className="text-[30px] font-bold text-secondary mb-3 max-w-[435px]">
              Get started with easily register
            </h1>
            <p className="mb-[30px] text-[20px]">Free register and you can enjoy it</p>
            <div className="relative mt-4">
              <input
                className="pl-8 w-[365px] h-[50px] border-[1px] border-[#11175D] border-opacity-[30%] rounded-lg"
                type="text"
                placeholder="Enter you email"
              />
              <p className="absolute top-[-9px] left-5 bg-white px-3 text-[13px]">
                Email Adress
              </p>
            </div>
            <div className="relative mt-10">
              <input
                className="pl-8 w-[365px] h-[50px] border-[1px] border-[#11175D] border-opacity-[30%] rounded-lg"
                type="text"
                placeholder="Enter you name"
              />
              <p className="absolute top-[-9px] left-5 bg-white px-3 text-[13px]">
                Full Name
              </p>
            </div>
            <div className="relative mt-10">
              <input
                className="pl-8 w-[365px] h-[50px] border-[1px] border-[#11175D] border-opacity-[30%] rounded-lg"
                type="text"
                placeholder="Enter you email"
              />
              <p className="absolute top-[-9px] left-5 bg-white px-3 text-[13px]">
                Email Adress
              </p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full">
          <img
            className="h-full w-full object-cover"
            src={SignupImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
