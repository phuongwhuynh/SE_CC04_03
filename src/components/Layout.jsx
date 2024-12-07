import hcmut from "../assets/hcmut.png"
import SidebarContainer from "./ui/Sidebar"
import Userbar from "./ui/Userbar"
import { useContext, useState,useEffect } from "react"
import { GlobalContext } from "../context/index"
import UserSetting from "./ui/Usersetting"
import { Outlet } from "react-router-dom"
import PrinterSetting from "./ui/PrinterSetting"
import AddPrinterModel from "./ui/AddPrinterModel"
import { getUserRole } from "../utils/utils"

const Layout = () => {
  const { openUserSetting, collapse, curPrinter, addPrinter } =
    useContext(GlobalContext)
    const [role, setRole] = useState(getUserRole())
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if (user && user.role !== role) {
        setRole(user.role)
      }
    }, [role]) 
  return (
    <>
      <div className="h-[100vh] flex w-full">
        <aside
          className={`transition-all duration-300 ${collapse ? "w-[5%]" : "w-[25%]"
            }`}
        >
          <div
            className="flex flex-col h-full"
            style={{ boxShadow: "3px 0px 8px 0px rgba(0, 0, 0, 0.24)" }}
          >
            <div
              className={`bg-blue-200 w-full p-2.5 flex items-center transition-all duration-300 ${collapse ? "justify-center" : ""
                }`}
            >
              <div
                className={`bg-white p-1 rounded-full flex items-center transition-all duration-300 ${collapse ? "w-10 h-11" : "w-auto h-11"
                  }`}
              >
                <img src={hcmut} alt="hcmut" width="35px" />
              </div>
            </div>
            <div className="h-full">
              <SidebarContainer role={role}/>
            </div>
          </div>
        </aside>

        <div className="h-full w-full">
          <div className="w-full bg-blue h-16 flex items-center p-2 justify-between pr-12 bar">
            <Userbar />
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
      {openUserSetting ? <UserSetting /> : null}
      {curPrinter ? <PrinterSetting /> : null}
      {addPrinter && <AddPrinterModel />}
    </>
  )
}

export default Layout
