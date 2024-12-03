import React, { useState } from "react"
import "../custom-theme.css"

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Input,
} from "@mui/material"

const PrinterSettingModel = ({model}) => {
  const [selectedValues, setSelectedValues] = useState(["A4", "A3"]) 
  const [selectedFiles, setSelectedFiles] = useState(["PDF", "PNG","DOCX"]) 
  const handleChange = (event) => {
    const value = event.target.value
    setSelectedValues(
      (prev) =>
        event.target.checked
          ? [...prev, value] 
          : prev.filter((item) => item !== value) 
    )
  }
  const handleFileChange = (event) => {
    const value = event.target.value
    setSelectedFiles((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    )
  }
  const [ink,setInk] = useState(model.ink)
  function handleInkChange(e){
    setInk(e.target.value);
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 items-center">
        <p className="font-semibold">Đổi mực in: </p>
        <Input value={ink} onChange={handleInkChange} sx={{ width: "120px" }} />
      </div>
      <div className="flex gap-16">
        <FormControl>
          <FormLabel
            id="demo-checkbox-buttons-group-label"
            sx={{ fontWeight: "bold" }}
          >
            Loại file cho phép :
          </FormLabel>
          <FormGroup>
            {" "}
            {["PNG", "PDF", "DOCX", "JPEG", "GIF", "EPS", ".ZIP"].map(
              (value) => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      value={value}
                      checked={selectedFiles.includes(value)}
                      onChange={handleFileChange}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                        transform: "scale(0.8)",
                      }}
                    />
                  }
                  label={<span style={{ color: "black" }}>{value}</span>}
                  sx={{
                    marginTop: "-10px",
                  }}
                />
              )
            )}
          </FormGroup>
        </FormControl>
        <div>
          <FormControl>
            <FormLabel
              id="demo-checkbox-buttons-group-label"
              sx={{ fontWeight: "bold" }}
            >
              Kích thước giấy cho phép:
            </FormLabel>
            <FormGroup>
              {" "}
          
              {["Letter", "A4", "A3", "B4", "A5"].map((value) => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      value={value}
                      checked={selectedValues.includes(value)} 
                      onChange={handleChange}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                        transform: "scale(0.8)", // Adjust size
                      }}
                    />
                  }
                  label={<span style={{ color: "black" }}>{value}</span>}
                  sx={{
                    marginTop: "-10px",
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
          <div>
            <p className="font-semibold">Khung giờ hoạt động quy định: </p>
            <div className="max-w-[16rem] grid grid-cols-2 gap-4 mb-2 mt-2">
              <div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-semibold">Số trang giấy cho phép mỗi lần in: </p>
        <div className="flex items-center gap-2">
          <Input value={"100 A4"} className="w-16" />
          <p className="mb-[-10px]">/</p>
          <Input value={"40 A3"} className="w-16" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-semibold">Số trang giấy còn lại hiện tại: </p>
        <div className="flex items-center gap-2">
          <Input value={`${model.page_left[0]} A4`} className="w-16" />
          <p className="mb-[-10px]">/</p>
          <Input value={`${model.page_left[1]} A3`} className="w-16" />
          <p className="mb-[-10px]">/</p>
          <Input value={``} className="w-16" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="buttonOwn1">
          <a href="#" className="relative">
            <div className="flex items-center gap-2">Tạm ngưng hoạt động</div>
          </a>
        </div>
        <div className="buttonOwn2">
          <a href="#" className="relative">
            <div className="flex items-center gap-2">Lưu thay đổi</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PrinterSettingModel
