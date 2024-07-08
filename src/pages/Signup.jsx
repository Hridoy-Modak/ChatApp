import React, { useState } from "react";
import SignupImage from "../assets/signupimage.png";

const Signup = () => {
  let [email, setEmail] = useState(" ");
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  // let [submit, setsubmit] = useState()f;

  let handlemail = (e) => {
    setEmail(e.target.value);
  };

  let handlename = (e) => {
    setName(e.target.value);
  };
  let handlepass = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
  };

  console.log(pass);

  let handleSubmit = () => {
    console.log(email, pass);
  };

  return (
    <div>
      <div className="flex  h-screen font-nunito">
        <div className="w-1/2 h-full relative">
          <div className="h-full flex flex-col justify-center absolute left-[50%] translate-x-[-50%]">
            <h1 className="text-[30px] font-bold text-secondary mb-3 max-w-[435px]">
              Get started with easily register
            </h1>
            <p className="mb-[30px] text-[20px]">
              Free register and you can enjoy it
            </p>
            <div className="relative mt-4">
              <input
                onChange={handlemail}
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
                onChange={handlename}
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
                type="password"
                placeholder="Enter you email"
              />
              <p className="absolute top-[-9px] left-5 bg-white px-3 text-[13px]">
                Password
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="text-5 text-white font-semibold w-[365px] bg-primary py-3 mt-5 rounded-lg"
            >
              Sign Up
            </button>
            <p className="text-center mt-5 ">
              Already Have an Account ?{" "}
              <span
                className="text-yellow-600 font-bold cursor-pointer
          "
              >
                login
              </span>
            </p>
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
