import React from "react";
import Profile from "../assets/Profile.jpg";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoBell, GoGear } from "react-icons/go";
import {} from "react-icons/io5";
import { IoExitSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import grimg1 from "../assets/GroupImg/img1.png";

const Home = () => {
  return (
    <homemenu className="flex mt-4 gap-3 mr-3 h-[96vh] font-nunito">
      <div className=" sidebar bg-[#5F35F5] w-[183px] h-[97vh]  ml-4 pt-5 flex flex-col items-center gap-[80px] rounded-[20px]">
        <div className=" relative w-[85px] h-[85px] rounded-[50%]  bg-white">
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80px] h-[80px] rounded-[50%] "
            src={Profile}
            alt=""
          />
        </div>
        <ul className="flex flex-col gap-[40px] w-full relative items-center">
          <div className="flex w-full flex-row-reverse item h-full">
            <div className=" w-full after:text-[#5F35F5] flex justify-center after:contant-[''] before:w-[0px] after:w-[150px] after:duration-1000 after:bg-white after:h-[45px] before:relative  after:absolute after:right-0 after:top-0 after:*:text-[#5F35F5] after:rounded-lg">
              <IoHomeOutline className="text-[35px] z-10 " />
            </div>
            <div className="bg-[#5F35F5] w-[10px] h-[45px] rounded-l-lg z-10 absolute "></div>
          </div>

          <li>
            <IoChatbubbleEllipsesOutline className="text-[35px] text-white w-full" />
          </li>
          <li>
            <GoBell className="text-[35px] text-white w-full" />
          </li>
          <li>
            <GoGear className="text-[35px] text-white w-full" />
          </li>
          <li>
            <IoExitSharp className="text-[35px] text-white w-full absolute bottom-[-40%] left-[50%] translate-x-[-50%]" />
          </li>
        </ul>
      </div>
      <div className="HomeData w-[100%] h-[95vh] flex gap-3">
        <div className="w-[33%] bg-white m-1 flex flex-col gap-4">
          <div className="SearchArea relative ">
            <input
              className="border w-full h-[45px] rounded-xl shadow-md pl-[80px] text-[14px] font-light"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="absolute top-[50%] translate-y-[-50%] text-[20px] ml-3" />
            <BsThreeDotsVertical className="absolute top-[50%] right-3 translate-y-[-50%] text-[#5F35F5]" />
          </div>
          <div className="Grouplist bg-white shadow-md rounded-xl relative border p-3">
            <h1 className=" mb-4">Grouplist</h1>
            <BsThreeDotsVertical className="absolute top-6 right-3 translate-y-[-50%] text-[#5F35F5]" />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Join
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Join
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Join
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="Grouplist bg-white shadow-md rounded-xl relative border p-3">
            <h1 className=" mb-4">Friend Request</h1>
            <BsThreeDotsVertical className="absolute top-6 right-3 translate-y-[-50%] text-[#5F35F5]" />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Accept
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Accept
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Accept
                </button>
              </div>
              <div className="flex justify-between px-2 items-center border-b">
                <div className="flex items-center  ">
                  <img className="w-12" src={grimg1} alt="" />
                  <div className="w-full ml-3 py-2">
                    <h3 className="text-[16px]">Friends Reunion</h3>
                    <p className="text-[10px]">Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className="text-white bg-[#5F35F5] h-fit py-1 px-5 rounded-md ">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33%] bg-white m-1"></div>
        <div className="w-[33%] bg-white m-1"></div>
      </div>
    </homemenu>
  );
};

export default Home;
