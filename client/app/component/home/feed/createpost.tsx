import { FaVideo, FaPhotoVideo, FaSmile } from "react-icons/fa";

export default function CreatePost() {

    const acc = "Tanthong"

  return (
    <div className="bg-[#242526] rounded-lg p-4 text-white space-y-3">

      {/* TOP ROW */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex w-10 h-10 bg-[#0866FF] rounded-full shrink-0" />

        {/* Input */}
        <div className="flex-1 bg-[#3A3B3C] rounded-full px-4 py-2 text-gray-400 hover:bg-[#4E4F50] cursor-pointer">
          What’s on your mind, {acc}?
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between">
            <ActionItem
            icon={<FaVideo className="text-red-500" />
            }
            />
            <ActionItem
            icon={<FaPhotoVideo className="text-green-500" />}
            
            />
            <ActionItem
            icon={<FaSmile className="text-yellow-400" />}
            
            />
        </div>
      </div>

      

      
    </div>
  );
}

function ActionItem({ icon }) {
  return (
    <div className="flex items-center  px-2 py-2 rounded-lg hover:bg-[#3A3B3C]  w-[40px] h-[40px] cursor-pointer text-gray-300">
      <span className="text-xl">{icon}</span>
      
    </div>
  );
}