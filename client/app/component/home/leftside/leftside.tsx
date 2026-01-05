"use client";
import SidebarItem from "./sidebaritem";
import { useState } from "react";

const sidebarItems = [
  "Meta AI",
  "Friends",
  "Saved",
  "Groups",
  "Reels",
  "Marketplace",
  "Feeds",
];

const extraItems = [
  "Ads Manager",
  "Birthdays",
  "Chat with AIs",
  "Events",
  "Gaming Video",
  "Messenger",
  "Messenger Kids",
  "Orders and payments",
  "Pages",
  "Play games",
  "Recent and activity",
];

const short = [
  "test",
  "testtest",
];

export default function LeftSide() {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="w-[360px] sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto">
      {/* Profile shortcut */}
        <div className="px-2 py-2 space-y-1">
            <SidebarItem label="Your Profile" large/>

            {/* Main items */}
            {sidebarItems.map((item) => (
              <SidebarItem key={item} label={item} />
            ))}

            {/* EXTRA ITEMS (conditional) */}
            {expanded &&
              extraItems.map((item) => (
                <SidebarItem key={item} label={item} />
              ))}
            
             {/* SEE MORE / SEE LESS */}
            <div
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#3A3B3C] text-white"
            >
              
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3A3B3C]">
                {expanded ? "▲" : "▼"}
              </div>
              <span >
                {expanded ? "See less" : "See more"}
              </span>
              
            </div>
            <div className="w-full border-b border-[#3A3B3C] my-1" />
            <div className=" py-2 space-y-1" >
              <div className=" pl-5 text-gray-400 font-bold">
                Your shortcuts
              </div>
               <div className="">
                {short.map((item) => (
                  <SidebarItem key={item} label={item} />
                ))}

               </div>
              
            </div>
        </div>
        
      
    </aside>
  );
}