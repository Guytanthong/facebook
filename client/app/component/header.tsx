"use client";
import Image from "next/image";

import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <header className="flex justify-between items-center bg-[#1C1E21] h-14 px-4 shadow border-b border-b-[0.5px] border-[#3A3B3C]">
        <div className="flex items-center h-10 px-[0.5px] gap-2 ">
            <div className=" flex items-center justify-center text-white text-2xl font-bold">
              <Image 
                src="/icons/fb.png"
                alt="logo icon"
                width={40} //bg-blue-500
                height={40} //w-10 h-10 rounded-full 
                className="opacity-80"
              />
            </div>
            

            <div className="flex items-center  bg-[#333334] w-[240px] h-[40px] px-2 rounded-full gap-2">
              <Image 
              src="/icons/search.svg"
              alt="search icon"
              width={20}
              height={40}
              className="opacity-80"
            />

            <input placeholder="Search Facebook" className="font-sans   text-[15px] outline-none text-[#858585] placeholder-[#B0B3B8]  " />
            
            </div>
            

            
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex gap-6">
            <Image
              src={activeTab === "home"
                ? "/icons/homeblue.svg"
                : "/icons/homegrey.svg"}
              width={24}
              height={24}
              alt="home"
              onClick={() => setActiveTab("home")}
              className="cursor-pointer"
            />

            <Image
              src={activeTab === "friend"
                ? "/icons/friendblue.svg"
                : "/icons/friendgrey.svg"}
              width={24}
              height={24}
              alt="home"
              onClick={() => setActiveTab("friend")}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>Right content</div>
    </header>
     
  );
}
