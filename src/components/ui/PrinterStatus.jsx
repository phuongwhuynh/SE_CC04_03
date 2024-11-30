import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Input,
} from "@mui/material"
import StatusButton from "./StatusButton"
import React from "react"

const PrinterStatus = ({ model }) => {
  const [selectedSizes, setSelectedSizes] = React.useState(["a3", "a4"])

  const handleCheckboxChange = (size) => {
    setSelectedSizes(
      (prev) =>
        prev.includes(size)
          ? prev.filter((s) => s !== size) 
          : [...prev, size] 
    )
  }

  return (
      <div className="text-[15px] flex flex-col gap-3">
        <div className="flex items-center gap-6">
          <p>Trạng thái: </p>
          <StatusButton model={model} />
        </div>
        <div className="flex items-center gap-6">
          <p>Nhãn hiệu máy: </p>
          <p className="font-semibold">{model.real_name}</p>
        </div>
        <div className="flex items-center gap-6">
          <p>Loại mực in đang sử dụng: </p>
          <p className="font-semibold">{model.ink}</p>
        </div>
        <div>
          <FormControl>
            <FormLabel>Kích thước giấy cho phép hiện tại: </FormLabel>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("a3")}
                    onChange={() => handleCheckboxChange("a3")}
                    sx={{
                      color: selectedSizes.includes("a3")
                        ? "bg-blue"
                        : "inherit", 
                      "&.Mui-checked": {
                        color: "bg-blue", 
                      },
                    }}
                  />
                }
                label="A3"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSizes.includes("a4")}
                    onChange={() => handleCheckboxChange("a4")}
                    sx={{
                      color: selectedSizes.includes("a4")
                        ? "bg-blue"
                        : "inherit",
                      "&.Mui-checked": {
                        color: "bg-blue", 
                      },
                    }}
                  />
                }
                label="A4"
              />
            </div>
          </FormControl>
        </div>
        <div className="flex items-center gap-4">
          <p>Khung giờ hoạt động quy định: </p>
          {/* <div className="max-w-[16rem] grid grid-cols-2 gap-4 mb-2">
          <div>
            <label
              for="start-time"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bắt đầu:
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="start-time"
                class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="end-time"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kết thúc:
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="end-time"
                class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
        </div> */}
          <div className="flex gap-2 font-semibold">
            <p className="border-b-2">7:00 AM</p>
            <p>-</p>
            <p className="border-b-2">5:00 PM</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Số trang giấy tối đa cho phép mỗi lần in: </p>
          <div className="flex gap-2 font-semibold">
            <p className="border-b-2">100 A4</p>
            <p>/</p>
            <p className="border-b-2">50 A3</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Số trang giấy còn lại hiện tại : </p>
          <div className="flex gap-2 font-semibold">
            <p className="border-b-2">{`${model.page_left[0]} A4`}</p>
            <p>/</p>
            <p className="border-b-2">{`${model.page_left[1]} A4`}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Loại file đang hỗ trợ :</p>
          <div className="flex gap-4">
            {model.file_type.map((type, idx) => (
              <div
                key={idx}
                className="border-2 px-2 rounded-sm font-semibold"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>Số lượt đã in: </p>
          <p className="font-semibold text-[#03346E] bg-[rgba(211,226,255,0.8)] py-1 px-2 rounded-md">
            45
          </p>
        </div>
      </div>
  )
}

export default PrinterStatus
