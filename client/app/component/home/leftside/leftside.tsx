import SidebarItem from "./sidebaritem";

const sidebarItems = [
  "Meta AI",
  "Friends",
  "Groups",
  "Saved",
  "Memories",
  "Marketplace",
  "Watch",
];

export default function LeftSide() {
  return (
    <aside className="w-[280px] sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto">
      {/* Profile shortcut */}
    
        <SidebarItem label="Your Profile" large/>
      
      

      

      {/* Main items */}
      {sidebarItems.map((item) => (
        <SidebarItem key={item} label={item} />
      ))}
    </aside>
  );
}