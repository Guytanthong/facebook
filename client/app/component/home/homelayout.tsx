import LeftSide from "./leftside/leftside";
import Feed from "./feed/feed";
import RightSide from "./rightside/rightside";

export default function HomeLayout() {
  return (
    <main className="flex w-full pt-[12px]">

      {/* LEFT SIDEBAR — STICKS TO LEFT EDGE */}
      <div className="hidden xl:block w-[280px] shrink-0">
        <LeftSide />
      </div>

      {/* CENTERED CONTENT AREA */}
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-[1200px] px-4">

          {/* FEED */}
          <div className="flex-1 max-w-[680px] mx-auto">
            <Feed />
          </div>

          

        </div>

        {/* RIGHT SIDEBAR */}
          <div className="hidden lg:block w-[360px] shrink-0">
            <RightSide />
          </div>
      </div>

    </main>
  );
}
