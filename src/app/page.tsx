import React from "react";
import Main from "@/component/Main/index";
import Section from "@/component/Section";
import Posts from "@/component/Post";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <Main />
      <Section />
      <Posts />
      <div className="col-span-4 border-2 border-t-2 border-gray-200 gap-8 mt-8 my-12 h-[100%] w-[100%] rounded-full overflow-hidden h-[80px] w-[80px] mx-auto rounded-[300px] rounded-[300px] bg-gray-100  mt-4 my-4 font-bold   bg-[#0099e6]  text-[#fff] px-[18px] py-[8px] rounded-[12px]  justify-center pt-8 w-[50%] w-[90%]rounded-[100px] justify-between col-span-3 grid grid-cols-12 flex gap-8 grid grid-cols-3 grid grid-cols-12 gap-4 col-span-4"></div>
      <div className="flex mt-2 justify-center">
        <div className="relative rounded-full overflow-hidden border-4  border-2 border-gray-300 border-pink-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://scontent.cdninstagram.com/v/t51.2885-19/434046128_947273720241108_3229650277076873971_n.jpg?stp=dst-jpg_s120x120&_nc_cat=1&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=1Ew8PY0KFxUAX-QG2mi&_nc_ht=scontent.cdninstagram.com&oh=00_AfA1kDgZEiV2NPX6RcD6yHsZzTbXDqpv_dfoyAp5_M62tg&oe=660B0335"
              width={250}
              height={250}
              alt="this is image"
              className="rounded-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
