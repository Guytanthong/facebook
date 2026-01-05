export default function Sponsored() {
  return (
    <div className="space-y-2">

      {/* TITLE */}
      <div className="text-gray-400 text-sm font-semibold px-2">
        Sponsored
      </div>

      {/* ADS */}
      <SponsoredItem
        title="Yanhee ecommerce shop"
        subtitle="shopee.co.th"
      />

      <SponsoredItem
        title="GrabFood deals"
        subtitle="grab.com"
      />

    </div>
  );
}

function SponsoredItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex gap-3 p-2 rounded-lg hover:bg-[#3A3B3C] cursor-pointer">

      {/* IMAGE PLACEHOLDER */}
      <div className="w-28 h-20 bg-[#242526] rounded-lg shrink-0" />

      {/* TEXT */}
      <div className="flex flex-col justify-center">
        <div className="text-sm text-white font-medium leading-snug">
          {title}
        </div>
        <div className="text-xs text-gray-400">
          {subtitle}
        </div>
      </div>

    </div>
  );
}