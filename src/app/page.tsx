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

      
    </div>
  );
}
