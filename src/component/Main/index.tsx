import React from "react";
import Image from "next/image";
import { FaThreads } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
export default function Index() {
  return (
    <div className=" flex gap-8 w-[90%] pt-8">
      <div  className="flex w-[50%] justify-center ">
        <Image
          src="https://scontent.cdninstagram.com/v/t51.2885-19/434046128_947273720241108_3229650277076873971_n.jpg?stp=dst-jpg_s120x120&_nc_cat=1&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=1Ew8PY0KFxUAX-QG2mi&_nc_ht=scontent.cdninstagram.com&oh=00_AfA1kDgZEiV2NPX6RcD6yHsZzTbXDqpv_dfoyAp5_M62tg&oe=660B0335"
          width={300}
          height={300}
          alt="this is image"
          className="rounded-[300px] border-4 border-pink-500"
        />
      </div>
      <div  className="w-[50%] ">
        <div className="flex gap-8">
          <h3>royalchallengers.bengaluru</h3>
          <button className="bg-[#0099e6] text-[#fff] px-[18px] py-[8px] rounded-[12px]">Follow</button>
          <button className="bg-gray-100 px-[18px] py-[8px] rounded-[12px]">Message</button>
          <FaThreads/>
          <BsThreeDots/>
        </div>
        <div  className="flex gap-8 my-4">
          <h6><span className="font-bold">21,303</span> posts</h6>
          <h6><span className="font-bold">13.5M</span> followers</h6>
          <h6><span className="font-bold">99</span> following</h6>
        </div>

        <div>
          <h6 className="font-bold">Royal Challengers Bengaluru</h6>
          <p>
            The official Instagram account of the Royal Challengers Bengaluru -
            WPL 2024 🏆 Stay connected with RCB 👇
          </p>
          <Link href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Froyalchallengersbangalore&e=AT3ZsfQuTzvvcfO3cBwYkGwuJT-i5NSViM1S42Oqdx6-EQ6EZGGxY0eGIMFmK3D8lLGgtaEzJJDMdaO2DG2okFzRevzyXtcQOxFfgQ" style={{color:"blue"}}>linktr.ee/royalchallengersbangalore</Link>
          <p  className="mt-4">Followed by swasthik.k.s, manoj_m_porammanavar, ranjan__moger + 86 more</p>
        </div>
      </div>
    </div>
  );
}
