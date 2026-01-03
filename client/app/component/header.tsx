"use client";
import Image from "next/image";

import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  const [activeRight, setActiveRight] = useState("");

  
  return (
    <header className="grid grid-cols-[320px_1fr_320px] items-center bg-[#1C1E21] h-14 px-4 border-b border-[#3A3B3C]">
        <div className="flex items-center h-10 px-[0.5px] gap-2 ">
            
            <div className=" flex items-center justify-center text-white text-2xl font-bold">
              <Image 
                src="/icons/fb.png"
                alt="logo icon"
                width={40} //bg-blue-500
                height={40} //w-10 h-10 rounded-full 
                className="opacity-100"
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



        <div className="flex  justify-center">
          <div className="flex justify-between items-center w-[680px]">
            {["home","friend","reels","marketplace","gaming"].map(tab => (
              <div 
                key={tab}
                className="relative h-14 flex flex-1 justify-center items-center cursor-pointer"
                onClick={() => setActiveTab(tab)}
              >
                
                <Image
                  src={
                    activeTab === tab
                      ? `/icons/${tab}blue.svg`
                      : `/icons/${tab}grey.svg`
                  }
                  width={24}
                  height={24}
                  alt={tab}
                />

                {/* Blue underline */}
                {activeTab === tab && (
                  <div className="absolute bottom-0 h-[3px] w-full bg-[#0866FF] rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
        

            
        <div className="flex items-center gap-2 pl-[125px]">

          {/* Menu */}
          <div
            onClick={() => setActiveRight("menu")}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
              ${activeRight === "menu" ? "bg-[#0866FF] "  : "bg-[#3A3B3C] hover:bg-[#4E4F50]"}
            `}
          >
            <Image
              src="/icons/rightcontent/menu.svg"
              width={22}
              height={22}
              alt="menu"
              className={`${activeRight === "menu" ? "invert" : ""}` }
            />
          </div>

          {/* Messenger */}
          <div
            onClick={() => setActiveRight("messenger")}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
              ${activeRight === "messenger" ? "bg-[#0866FF]" : "bg-[#3A3B3C] hover:bg-[#4E4F50]"}
            `}
          >
            <Image
              src="/icons/rightcontent/messenger.svg"
              width={22}
              height={22}
              alt="messenger"
              className={`${activeRight === "messenger" ? "invert" : ""}`}
            />

            <span className="absolute -top-1 -right-1 bg-[#e41e3f] text-white text-[10px] px-[6px] py-[1px] rounded-full">
              3
            </span>
          </div>

          {/* Notification */}
          <div
            onClick={() => setActiveRight("notification")}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
              ${activeRight === "notification" ? "bg-[#0866FF]" : "bg-[#3A3B3C] hover:bg-[#4E4F50]"}
            `}
          >
            <Image
              src="/icons/rightcontent/notification.svg"
              width={22}
              height={22}
              alt="notification"
              className={`${activeRight === "notification" ? "invert" : ""}`}
            />

            <span className="absolute -top-1 -right-1 bg-[#e41e3f] text-white text-[10px] px-[6px] py-[1px] rounded-full">
              16
            </span>
          </div>

          {/* Profile */}
          <div
            onClick={() => setActiveRight("profile")}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
              ${activeRight === "profile" ? "bg-[#0866FF]" : "bg-[#3A3B3C] hover:bg-[#4E4F50]"}
            `}
          >
            <Image
              src="/icons/rightcontent/profile.svg"
              width={22}
              height={22}
              alt="profile"
              className={`${activeRight === "profile" ? "invert" : ""}`}
            />
          </div>

        </div>
                
        
    </header>
     
  );
}
