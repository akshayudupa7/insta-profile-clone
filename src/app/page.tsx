import React from "react";
import Main from "@/component/Main/index";
import Section from "@/component/Section";
import Posts from "@/component/Post";
import Image from "next/image";
import Dashboard from "@/component/Dashboard";
export default function page() {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden lg:block col-span-1 ">
        <Dashboard />
      </div>
      <div className="col-span-11 ">
        <Main />
        <Section />
        <Posts />
      </div>
      <div className=" hidden flex text-base flex-wrap sm:text-[10px]"></div>
      <div className="hidden md:block md:hidden col-span-4 col-span-2  gap-1  mb-1 border-2 border-t-2 border-gray-200 gap-8 mt-8 my-12 h-[100%] w-[100%] rounded-full overflow-hidden h-[80px] w-[80px] mx-auto rounded-[300px] rounded-[300px] bg-gray-100  mt-4 my-4 font-bold   bg-[#0099e6]  text-[#fff] px-[18px] py-[8px] rounded-[12px]  justify-center pt-8 w-[50%] w-[90%]rounded-[100px] justify-between col-span-3 grid grid-cols-12 flex gap-8 grid grid-cols-3 grid grid-cols-12 gap-4 col-span-4"></div>
      <div className="hidden flex mt-2 justify-center">
        <div className="hidden relative rounded-full overflow-hidden border-4  border-2 border-gray-300 ">
          <div className="hidden rounded-[80px] rounded-[50px] rounded-[300px] border-2 border-pink-500 md:hidden xs:block md:text-[16px] md:w-[50%] xs:w-[90%]   xs:mx-auto sm:mx-auto  sm:m-auto justify-center px-4 block rounded-[50px] md:hidden flex w-[30%] block md:hidden border-r-2 border-gray-200 fixed top-0 right-0 absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
