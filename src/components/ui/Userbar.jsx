import { MdMenu } from "react-icons/md"
import { IoMdSearch } from "react-icons/io"
import Chat from "./Chat"
import Notification from "./Notification"
import User from "./User"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context"
import { LuChevronFirst } from "react-icons/lu"
import { LuChevronLast } from "react-icons/lu"

const Userbar = () => {
const user = JSON.parse(localStorage.getItem("user"))
  const { collapse,
    setCollapse } = useContext(GlobalContext)
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  useEffect(() => {

  })
  return (
    <>
      <div>
        {collapse ? (
          <LuChevronLast
            className="text-4xl text-white cursor-pointer"
            onClick={toggleCollapse}
          />
        ) : (
          <LuChevronFirst
            className="text-4xl text-white cursor-pointer"
            onClick={toggleCollapse}
          />
        )}
      </div>
      <div className="flex bg-[#ECE6F0] items-center gap-2 px-2 py-1 rounded-md text-[#49454F] text-lg w-[40%]">
        <MdMenu className="text-2xl" />
        <input
          placeholder="Tìm kiếm"
          className="w-full bg-transparent outline-none cursor-pointer"
        />
        <IoMdSearch />
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <Chat />
          <Notification />
        </div>
        <User />
      </div>
    </>
  )
}
export default Userbar
