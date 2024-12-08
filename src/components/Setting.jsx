import { useState, useContext, useEffect } from "react"
import { FaPlus } from "react-icons/fa6"
import { FiFilter } from "react-icons/fi"
import "./custom-theme.css"
import Printer from "./ui/Printer"
import { GlobalContext } from "../context"
import CustomSelect from "./Filter"

export const Printers = () => {
  const { setAddPrinter, printersList } = useContext(GlobalContext)
  const [prints, setPrints] = useState(printersList)

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState(null)

  useEffect(() => {
    const filterPrinters = () => {
      let filteredPrinters = printersList // Use the global context's printersList

      if (selectedLocation && selectedLocation !== "All") {
        filteredPrinters = filteredPrinters.filter(
          (p) => p.location === selectedLocation
        )
      }

      if (selectedStatus && selectedStatus !== "All") {
        filteredPrinters = filteredPrinters.filter(
          (p) => p.status === selectedStatus
        )
      }

      if (selectedType && selectedType !== "All") {
        filteredPrinters = filteredPrinters.filter(
          (p) => p.real_name.split(" ")[0] === selectedType
        )
      }

      setPrints(filteredPrinters)
    }

    filterPrinters()
  }, [selectedLocation, selectedType, selectedStatus, printersList]) // Add printersList to dependencies

  const resetFilters = () => {
    setSelectedLocation(null)
    setSelectedType(null)
    setSelectedStatus(null)
    setPrints(printersList) // Reset prints to all printers
  }

  const printerStatuses = [
    { value: "All", label: "All" },
    { value: "rest", label: "Nghỉ ngơi" },
    { value: "error", label: "Lỗi" },
    { value: "printing", label: "Đang in" },
  ]

  const printerLocations = [
    { value: "All", label: "All" },
    { value: "CS1", label: "CS1" },
    { value: "CS2", label: "CS2" },
  ]

  const printerTypes = [
    { value: "All", label: "All" },
    ...[
      ...new Set(
        printersList.map((printer) => printer.real_name.split(" ")[0])
      ),
    ].map((item) => ({ value: item, label: item })),
  ]

  return (
    <div
      id="style-15"
      className="w-[98%] h-[80vh] overflow-y-scroll overflow-x-hidden scroll-smooth ml-4 pb-12"
    >
      <div className="w-full mt-[-10px] flex justify-between items-center">
        <p className="text-3xl font-semibold">Cài đặt</p>
        <div>
          <div className="buttonOwn" onClick={() => setAddPrinter(true)}>
            <a href="#" className="relative">
              <div className="flex items-center gap-2">
                <FaPlus />
                <span className="ml-2">Thêm máy in</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex items-center h-12 border border-gray-400 ml-2 mr-10 mb-4 rounded-md justify-between p-0"
        style={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}
      >
        <div
          className="flex items-center gap-4 border border-r-gray-400 m-0 h-full px-6 w-full cursor-pointer"
          onClick={resetFilters}
        >
          <FiFilter className="text-2xl" />
          <div>Lọc lại</div>
        </div>
        <div className="border border-r-gray-400 h-full w-full flex items-center justify-center">
          <CustomSelect
            options={printerLocations}
            value={selectedLocation}
            placeholder="Vị trí máy in"
            onChange={(option) => setSelectedLocation(option?.value || "All")}
          />
        </div>
        <div className="border border-r-gray-400 h-full w-full flex items-center justify-center">
          <CustomSelect
            options={printerTypes}
            value={selectedType}
            placeholder="Loại máy in"
            onChange={(option) => setSelectedType(option.value)}
          />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <CustomSelect
            options={printerStatuses}
            value={selectedStatus}
            placeholder="Trạng thái máy in"
            onChange={(option) => setSelectedStatus(option.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-10 mx-2 mr-10">
        {prints.length ? (
          prints.map((printer, idx) => <Printer model={printer} key={idx} />)
        ) : (
          <p className="ml-2 font-semibold text-xl">No printer found</p>
        )}
      </div>

    </div>
  )
}
