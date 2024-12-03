import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
  const [tab, setTab] = useState("home");
  const [openUserSetting, setOpenUserSetting] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [curPrinter, setCurPrinter] = useState(null)
  const [addPrinter, setAddPrinter] = useState(false)
  const [files, setFiles] = useState([])
  return (
    <GlobalContext.Provider
      value={{
        tab,
        setTab,
        openUserSetting,
        setOpenUserSetting,
        collapse,
        setCollapse,
        curPrinter,
        setCurPrinter,
        addPrinter,
        setAddPrinter,
        files,
        setFiles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}