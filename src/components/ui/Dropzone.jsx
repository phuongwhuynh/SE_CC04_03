import { useCallback, useContext, useState } from "react"
import { useDropzone } from "react-dropzone"

import { GlobalContext } from "../../context"
import { IoImage } from "react-icons/io5"
import "../custom-theme.css"

function MyDropzone() {
  const { files, setFiles } = useContext(GlobalContext)
  const [filePreview, setFilePreview] = useState(null) // To store the preview URL
  const [fileName, setFileName] = useState("") // To store the file name

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        const file = acceptedFiles[0] // Only allow one file
        setFiles([file]) // Set the files array with only one file

        // Create a preview URL for the file and set it
        setFilePreview(URL.createObjectURL(file))
        setFileName(file.name) // Store the file name
      }
    },
    [files]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [], 
    },
    maxSize: 100 * 1024, 
    multiple: false, 
  })

  return (
    <form>
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-md p-2"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Thả ảnh vào đây...</p>
        ) : filePreview ? (
      
          <div className="flex gap-4 w-[350px]">
            <div className="h-24 w-24 bg-gray-300 flex items-center justify-center rounded-md">
              <img
                src={filePreview}
                alt="file preview"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[15px]">Ảnh đã chọn</p>
              <p className="font-semibold">{fileName}</p> 
            </div>
          </div>
        ) : (
         
          <div className="flex gap-4 w-[350px]">
            <div className="h-[100px] w-[140px] bg-gray-300 flex items-center justify-center rounded-md">
              <IoImage className="text-gray-500 text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[15px]">
                Thêm ảnh cho máy in, kích cỡ file nhỏ hơn 100KB
              </p>
              <button className="py-1 px-2 rounded-md w-24 border border-[#10B981] text-[#10B981]">
                Thêm ảnh
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}

export default MyDropzone
