import hcmut from "../assets/hcmut.png"
import SidebarContainer from "./ui/Sidebar"
import Userbar from "./ui/Userbar"
import { useContext } from "react"
import { GlobalContext } from "../context/index"
import UserSetting from "./ui/Usersetting"
import { Outlet } from "react-router-dom"
import PrinterSetting from "./ui/PrinterSetting"
import AddPrinterModel from "./ui/AddPrinterModel"

const Layout = () => {
  const { openUserSetting, collapse, curPrinter, addPrinter } =
    useContext(GlobalContext)

  return (
    <>
      <div className="h-[100vh] flex w-full">
        <aside
          className={`transition-all duration-300 ${collapse ? "w-[5%]" : "w-[18%]"
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
              <SidebarContainer />
            </div>
          </div>
        </aside>
        <div className="w-full h-full">
          <div className="flex items-center justify-between w-full h-16 p-2 pr-12 bg-blue">
            <Userbar />
          </div>
          <div>
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
