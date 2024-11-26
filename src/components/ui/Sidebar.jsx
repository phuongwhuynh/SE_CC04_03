import { IoHome, IoSettingsSharp } from "react-icons/io5"
import { IoMdCart } from "react-icons/io"
import { BiSolidReport } from "react-icons/bi"
import { MdAdminPanelSettings } from "react-icons/md"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa6"

import { useContext } from "react"
import { GlobalContext } from "../../context"
import Instruction from "./Instruction"

const SidebarContainer = () => {
  const { tab, setTab, collapse } = useContext(GlobalContext)
  const items = [
    {
      title: "Trang chủ",
      icon: <IoHome />,
      to: "/",
      indicate: "home",
    },
    {
      title: "In order",
      icon: <IoMdCart />,
      to: "/order",
      indicate: "order",
    },
    {
      title: "Báo cáo sales",
      icon: <BiSolidReport />,
      to: "/report",
      indicate: "report",
    },
    {
      title: "Cài đặt máy in",
      icon: <IoSettingsSharp />,
      to: "/setting",
      indicate: "setting",
    },
    {
      title: "Quản lý người dùng",
      icon: <MdAdminPanelSettings />,
      to: "/users",
      indicate: "user",
    },
  ]
  return (
    <div
      className={`h-full flex flex-col ${collapse ? "w-[4rem]" : "w-[16rem]"} justify-between`}
    >
      <div className={`group cursor-pointer`}>
        {items.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`flex justify-between items-center p-3 transition-all duration-300 ${tab === item.indicate ? "bg-blue text-white" : "bg-white"
                }  ${collapse ? "m-2 rounded-md" : "m-0"}`}
              onClick={() => setTab(item.indicate)}
            >
              <div className={`flex items-center gap-2 text-base`}>
                <div
                  className={`${collapse ? "text-2xl" : "text-xl"
                    } transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div
                  className={`font-semibold transition-opacity duration-300 overflow-hidden ${collapse ? "hidden" : "opacity-100 w-auto"
                    }`}
                >
                  {item.title}
                </div>
              </div>
              <div
                className={`transition-opacity duration-300 ${collapse ? "opacity-0" : "opacity-100"
                  }`}
              >
                <FaChevronRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`relative transition-all duration-300 ease-in-out ${collapse
          ? "w-0 h-0 opacity-0 overflow-hidden"
          : "w-auto h-auto opacity-100"
          }`}
      >
        <Instruction />
      </div>
    </div>
  )
}

export default SidebarContainer
