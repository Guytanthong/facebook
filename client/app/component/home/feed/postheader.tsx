export default function PostHeader({ author }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#0866FF] rounded-full" />
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-xs text-gray-400">Just now</div>
      </div>
    </div>
  );
}