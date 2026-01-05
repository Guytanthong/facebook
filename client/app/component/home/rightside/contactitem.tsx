export default function ContactItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#3A3B3C] cursor-pointer">

      {/* AVATAR */}
      <div className="relative">
        <div className="w-8 h-8 bg-[#0866FF] rounded-full" />

        {/* ONLINE DOT */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#18191A] rounded-full" />
      </div>

      {/* NAME */}
      <span className="text-sm text-white font-medium">
        {name}
      </span>

    </div>
  );
}