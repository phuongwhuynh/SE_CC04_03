import { IoMdNotificationsOutline } from "react-icons/io"

const Notification = () => {
  return (
    <div className="relative">
      <IoMdNotificationsOutline className="text-2xl text-white" />
      <div className="absolute text-white font-semibold rounded-full p-1 w-5 h-5 flex items-center justify-center bg-[#B3261E] text-sm top-[-6px] right-[-6px]">
        4
      </div>
    </div>
  )
}
export default Notification
