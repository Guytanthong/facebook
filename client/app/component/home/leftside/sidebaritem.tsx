type SidebarItemProps = {
  label: string;
  large?: boolean;
};

export default function SidebarItem({ label, large }: SidebarItemProps) {
  return (
    <div className="flex items-center gap-3 px-5 py-2 rounded-lg hover:bg-[#3A3B3C] cursor-pointer text-white">
      <div
        className={`rounded-full bg-[#0866FF] ${
          large ? "w-10 h-10" : "w-8 h-8"
        }`}
      />
      <span className={large ? "font-semibold" : "text-sm font-medium"}>
        {label}
      </span>
    </div>
  );
}