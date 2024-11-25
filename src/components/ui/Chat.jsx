import { IoChatbubbleOutline } from "react-icons/io5"

const Chat = () => {
  return (
    <div className="relative">
      <IoChatbubbleOutline className="text-2xl text-white" />
      <div className="absolute text-white font-semibold rounded-full p-1 w-5 h-5 flex items-center justify-center bg-[#B3261E] text-sm top-[-6px] right-[-6px]">
        4
      </div>
    </div>
  )
}
export default Chat
