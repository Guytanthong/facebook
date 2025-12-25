import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#1C1E21] h-14 px-4 shadow border-b border-b-[0.5px] border-[#3A3B3C]">
        <div className="flex items-center h-10 px-3 gap-2 ">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                f
            </div>
            

            <div className="flex items-center  bg-[#333334] w-[240px] h-[40px] px-1 rounded-full gap-2">
              <Image 
              src="/icons/search.svg"
              alt="search icon"
              width={16}
              height={16}
              className="opacity-80"
            />

            <input placeholder="Search Facebook" className="font-sans   text-[15px] outline-none text-[#858585] placeholder-[#B0B3B8]  " />
            
            </div>
            

            
        </div>
        <div>Center content</div>
        <div>Right content</div>
    </header>
     
  );
}
