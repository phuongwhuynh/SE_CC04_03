import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [tab,setTab] = useState("home");
    const [openUserSetting,setOpenUserSetting] = useState(false)
    const [collapse, setCollapse] = useState(false)
    return (
      <GlobalContext.Provider
        value={{
          tab,
          setTab,
          openUserSetting,
          setOpenUserSetting,
          collapse,
          setCollapse,
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
}