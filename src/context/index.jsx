import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [tab,setTab] = useState("home");
    const [openUserSetting,setOpenUserSetting] = useState(false)
    const [collapse, setCollapse] = useState(false)
<<<<<<< HEAD
=======
    const [curPrinter,setCurPrinter] = useState(null)
    const [addPrinter,setAddPrinter] = useState(false)
    const [files, setFiles] = useState([])
>>>>>>> Anh
    return (
      <GlobalContext.Provider
        value={{
          tab,
          setTab,
          openUserSetting,
          setOpenUserSetting,
          collapse,
          setCollapse,
<<<<<<< HEAD
=======
          curPrinter,
          setCurPrinter,
          addPrinter,
          setAddPrinter,
          files,
          setFiles,
>>>>>>> Anh
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
}