// PrinterSetting.js
import { useContext, useState, useEffect } from "react"

import { Dialog } from "primereact/dialog"
import { GlobalContext } from "../../context"
import { BsFillPrinterFill } from "react-icons/bs"
import PrinterStatus from "./PrinterStatus"
import History from "./History"
import PrinterPrintingHistory from "./PrinterPrintingHistory"
import PrinterSettingModel from "./PrinterSettingModel"

const PrinterSetting = () => {
  const { curPrinter, setCurPrinter } = useContext(GlobalContext)
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState("center")
  const [chosenTab, setChosenTab] = useState(0)
  useEffect(() => {
    if (curPrinter) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [curPrinter])

  return (
    <Dialog
      header={
        <span className="flex gap-2 items-center text-[18px] text-black my-[-10px]">
          <BsFillPrinterFill /> Cấu hình máy in {curPrinter.location} - P
          {curPrinter.number}
        </span>
      }
      visible={visible}
      position={position}
      style={{ width: "50vw" }}
      onHide={() => {
        setVisible(false)
        setCurPrinter(null)
      }}
      footer={<></>}
      draggable={true}
      resizable={false}
    >
      <div className="bg-[#ECF0F1] w-full h-full p-2">
        <div className="flex text-sm h-9 items-end">
          <div
            className={`border border-[#BDC3C7] px-2 py-1 cursor-pointer border-b-0 ${
              chosenTab === 0
                ? "bg-white border-b-0 h-9 py-2 mb-[-1px]"
                : "bg-[#ECF0F1] border-r-0"
            }`}
            onClick={() => setChosenTab(0)}
          >
            Trạng thái
          </div>
          <div
            className={`border border-[#BDC3C7] px-2 py-1 cursor-pointer border-b-0 ${
              chosenTab === 1
                ? "bg-white border-b-0 h-9 py-2 mb-[-1px]"
                : "bg-[#ECF0F1] border-l-0 "
            }`}
            onClick={() => setChosenTab(1)}
          >
            Lịch sử in
          </div>
          <div
            className={`border border-[#BDC3C7] px-2 py-1 cursor-pointer border-b-0 ${
              chosenTab === 2
                ? "bg-white border-b-0 h-9 py-2 mb-[-1px]"
                : "bg-[#ECF0F1] border-l-0"
            }`}
            onClick={() => setChosenTab(2)}
          >
            Cài đặt
          </div>
          <div
            className={`border border-[#BDC3C7] px-2 py-1 cursor-pointer border-b-0 ${
              chosenTab === 3
                ? "bg-white border-b-0 h-9 py-2 mb-[-1px]"
                : "bg-[#ECF0F1] border-l-0"
            }`}
            onClick={() => setChosenTab(3)}
          >
            Lịch sử cài đặt
          </div>
        </div>
        <div className="bg-white border border-[#BDC3C7] p-4">
          {chosenTab == 0 ? <PrinterStatus model={curPrinter} /> :
          (chosenTab == 1?<PrinterPrintingHistory/>:
          (chosenTab==2?<PrinterSettingModel model={curPrinter}/>:<History/>))}
        </div>
      </div>
    </Dialog>
  )
}

export default PrinterSetting
