import hcmut from "../assets/hcmut.png"
import SidebarContainer from "./ui/Sidebar"
import Userbar from "./ui/Userbar"
import { useContext } from "react"
import { GlobalContext } from "../context/index"
import UserSetting from "./ui/Usersetting"

const Layout = () => {
  const { openUserSetting, collapse } = useContext(GlobalContext)

  return (
    <>
      <div className="h-[100vh] flex w-full">
        {/* Sidebar with transition */}
        <aside
          className={`transition-all duration-300 ${
            collapse ? "w-[5%]" : "w-[20%]"
          }`}
        >
          <div
            className="h-full flex flex-col"
            style={{ boxShadow: "3px 0px 8px 0px rgba(0, 0, 0, 0.24)" }}
          >
            <div
              className={`bg-blue-200 w-full p-2.5 flex items-center transition-all duration-300 ${
                collapse ? "justify-center" : ""
              }`}
            >
              <div
                className={`bg-white p-1 rounded-full flex items-center transition-all duration-300 ${
                  collapse ? "w-10 h-11" : "w-auto h-11"
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

 
        <div className="h-full w-full">
          <div className="w-full bg-blue h-16 flex items-center p-2 justify-between pr-12">
            <Userbar />
          </div>
        </div>
      </div>

    
      {openUserSetting ? <UserSetting /> : null}
    </>
  )
}

export default Layout
