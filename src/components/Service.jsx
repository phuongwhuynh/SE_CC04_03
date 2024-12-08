import React, { useState, useEffect, useContext } from "react";
import * as pdfjs from 'pdfjs-dist/build/pdf';
import { FaExclamationCircle,FaCheckCircle    } from 'react-icons/fa';
import { GlobalContext } from "../context"
import { useNavigate } from "react-router-dom";

// TO-DO: wrap necassary info of successfully printed document and push to global context 

pdfjs.GlobalWorkerOptions.workerSrc = '/node_modules/pdfjs-dist/build/pdf.worker.mjs';

const PrinterPropertiesModal = ({ propertiesModal, setOpenPropertiesModal, paperSize, setPaperSize, selectedPrinter }) => {
  if (!propertiesModal) return null; 
  else if (!selectedPrinter){
    return (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 max-w-sm text-center">
          <h3 className="text-xl font-bold mb-4">Thông báo</h3>
          <p>Xin hãy chọn máy in</p>
          <button
            className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-200 active:bg-blue-300"
            onClick={() => setOpenPropertiesModal(false)}
          >
            Đóng
          </button>
        </div>
      </div>
    );
  }
  else return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">
            Tùy chọn máy in {selectedPrinter.real_name}
          </span>
          {/* Close Button inside the Header */}
          <button
            className="text-blue hover:text-blue-200"
            onClick={() => setOpenPropertiesModal(false)}
            aria-label="Close"
          >
            &#10006;
          </button>
        </div>

        <div className="space-y-6 flex-grow">
          {/* Paper / Output Section */}
          <div>
            <h3 className="text-gray-800 font-medium mb-2">Giấy:</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Khổ giấy:</span>
              <select
                className="mt-1 block w-16 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={paperSize}
                onChange={(e) => setPaperSize(e.target.value)}
              >
                {selectedPrinter?.allowedPaperType?.map((paperType, index) => (
                  <option key={index} value={paperType}>
                    {paperType}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Printer Features Section */}
          <div>
            <h3 className="text-gray-800 font-medium mb-2">Tính năng máy in:</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700">Chất lượng in: </span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Nháp</option>
                  <option selected>Bình thường</option>
                  <option>Chất lượng cao</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Thứ tự trang:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Phải, sau đó Xuống</option>
                  <option>Xuống, sau đó Phải</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Màu sắc:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Màu</option>
                  <option selected>Đen trắng</option>
                  <option>Đơn sắc</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">In đảo ngược:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option selected>Tắt</option>
                  <option>Bật</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Hình mờ:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Không</option>
                  <option>Tùy chỉnh</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button below content */}
        <button
          className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-200 active:bg-blue-300"
          onClick={() => setOpenPropertiesModal(false)}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};
 
const PrinterSelectionModal = ({ isOpen, onClose, onSelect, printersList }) => {
  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  if (!isOpen) return null;

  const totalPages = Math.ceil(printersList.length / itemsPerPage);

  const currentItems = printersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-1/3 p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">Chọn máy in</h3>
        <ul>
          {currentItems.map((printer, index) => (
            <li
              key={index}
              className="border-b py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onSelect(printer);
                onClose();
              }}
            >
              <div>
                <strong>{printer.real_name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Địa điểm: {printer.location} </span>
                <span> Tòa nhà: {printer.building}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4">
          <button
            className={`px-3 py-1 bg-gray-200 rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Trước
          </button>
          <span className="p-2">
            Trang {currentPage} của {totalPages}
          </span>
          <button
            className={`px-3 py-1 bg-gray-200 rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>

        <button
          className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-200 active:bg-blue-300"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};


const MessageModal = ({ message, isOpen, onClose, handleNavigation }) => {
  if (!isOpen) return null;
  else if (message==="Tài khoản của bạn không đủ số trang"){
    return(
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Lỗi</h2>
          <div className="flex justify-center mb-4">
            <FaExclamationCircle className="text-red-700" size={48} />
          </div>
          <span className="block text-center">{message}</span>
          <div className="flex flex-row justify-center">
            <button
              className="m-4 h-12 p-2 bg-blue hover:bg-blue-200 active:bg-blue-300 text-white rounded-lg"
              onClick={() => handleNavigation("payment")}
            >
              Tới trang mua
            </button>
            <button
              className="m-4 w-16 h-12 p-2 bg-red-500 hover:bg-red-400 active:bg-red-300 text-white rounded-lg"
              onClick={onClose}
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    )
  }
  else return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Lỗi</h2>
        <div className="flex justify-center mb-4">
          <FaExclamationCircle className="text-red-700" size={48} />
        </div>
        <span className="block text-center">{message}</span>
        <button
          className="mt-4 w-full p-2 bg-red-500 hover:bg-red-400 active:bg-red-300 text-white rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

const PrintingProgressModal = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0); 

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 10; 
          }
          clearInterval(interval); 
          return prev;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (progress >= 0 && progress < 25) {
      setStep(0); 
    } else if (progress >= 25 && progress < 50) {
      setStep(1); 
    } else if (progress >= 50 && progress < 75) {
      setStep(2); 
    } else if (progress >= 75 && progress < 100) {
      setStep(3); 
    }
  }, [progress]);

  const steps = [
    'Kiểm tra yêu cầu in',
    'Gửi yêu cầu cho máy in',
    'Máy in bắt đầu in',
    'In xong',
  ];
  const handleClose = () => {
    onClose();
    setProgress(0);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {progress === 100 ? (
              <>
                {/* Only show print successful and icon when progress reaches 100% */}
                <span className="block text-xl font-semibold mb-4 text-center">In thành công</span>
                <div className="flex justify-center items-center mb-4 my-4">
                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <FaCheckCircle size={36} /> 
                </div>
                </div>
              </>
            ) : (
              <>
                {/* Show progress steps until progress reaches 100% */}
                <span className="block text-xl font-semibold mb-4 text-center">Đang in...</span>

                <p className="my-4 text-l font-bold">{steps[step]}</p>
                <div className="relative mb-4">
                  {/* <div className="flex justify-between mb-2">
                    <span className="text-sm">{steps[step]}</span>
                  </div> */}
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div
                      className="h-4 bg-blue-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </>
            )}

            <button
              className="mt-4 w-full p-2 bg-blue hover:bg-blue-300 active:bg-blue-200 text-white rounded-lg"
              onClick={handleClose}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Print = () => {
  const navigate = useNavigate(); 
  const {printersList, addLog, curStudent, getUserBalance, updateUserBalance, setCurStudent, setTab}=useContext(GlobalContext)
  const { selectedPrinter, setSelectedPrinter,
          copies, setCopies,
          maxPages, setMaxPages,
          range, setRange,
          pagesPerSheet, setPagesPerSheet,
          orientation, setOrientation,
          margin, setMargin,
          isDoubleSided, setIsDoubleSided,
          flipOption, setFlipOption,
          filePreview, setFilePreview,
          fileType, setFileType,
          pdfPages, setPdfPages,
          fileName, setFileName,
          paperSize, setPaperSize}=useContext(GlobalContext)
  useEffect(() => {
    console.log("useEffect triggered");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setCurStudent(savedUser);  // Sets the state once the data is available
    }
  }, []); 

  const [printerModal, setOpenPrinterModal]=useState(false);
  const [propertiesModal, setOpenPropertiesModal]=useState(false);
  const [message, setMessage] = useState(""); // To store the message to show in modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [progressModal, setOpenProgressModal]=useState(false);
  const closeModal = () => setOpenProgressModal(false);

  const handleNavigation = (path) => {
    setTab(path);
    navigate('/'+path);
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileType(file.type);
      setRange("");
      const radioButtons = document.querySelectorAll('input[type="radio"][name="pageRange"]');
      radioButtons.forEach((radioButton) => {
        radioButton.checked = false; 
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        if (file.type.startsWith("image")) {
          setMaxPages(1);
          setFilePreview(reader.result);
        } else if (file.type === "application/pdf") {
          renderPDF(reader.result); // Render PDF preview
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileType(file.type);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (file.type.startsWith("image")) {
          setMaxPages(1);
          setFilePreview(reader.result);
        } else if (file.type === "application/pdf") {
          renderPDF(reader.result); 
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderPDF = (pdfData) => {
    const byteArray = Uint8Array.from(atob(pdfData.split(',')[1]), c => c.charCodeAt(0));  // Convert base64 to Uint8Array
  
    const loadingTask = pdfjs.getDocument({ data: byteArray });
    loadingTask.promise.then(
      (pdf) => {
        const numPages = pdf.numPages;
        setMaxPages(numPages);
        const pages = [];
        const renderPagePromises = [];  // hold promises (~=threads) to ensure correct pdf pages order
  
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const renderPagePromise = pdf.getPage(pageNum).then((page) => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
  
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
  
            return page.render({ canvasContext: context, viewport }).promise.then(() => {
              return canvas.toDataURL();
            });
          });
  
          renderPagePromises.push(renderPagePromise);  
        }
  
        Promise.all(renderPagePromises).then((pagesData) => {
          setPdfPages(pagesData);  
        });
      },
      (error) => {
        console.error("Error rendering PDF", error);
      }
    );
  };
  
  const handlePrintClick = () => {
    if ((!filePreview && pdfPages.length === 0) || (!range) || (!selectedPrinter)) {
      setMessage("Các thông số cài đặt không hợp lệ");
      setIsModalOpen(true);
    } 

    else {
      //addLog(fileName, totalPages, selectedPrinter, curStudent? curStudent.username : "");
      const parts=range.split("-");
      let calculatedTotalPages = parts.length === 2
        ? (Number(parts[1]) - Number(parts[0]) + 1) * copies
        : copies;
      if (isDoubleSided) calculatedTotalPages=Math.ceil(calculatedTotalPages / 2);

      console.log(calculatedTotalPages)
      console.log(curStudent.studentID)
      console.log(getUserBalance())
      if (calculatedTotalPages>getUserBalance()){
        setMessage("Tài khoản của bạn không đủ số trang");
        setIsModalOpen(true);
      }
      else {
        updateUserBalance(-calculatedTotalPages);
        addLog(fileName, calculatedTotalPages, selectedPrinter.real_name + " - " + selectedPrinter.location +" (" +selectedPrinter.building +")", curStudent.studentID)
        setMessage("Print successful!");
        setOpenProgressModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-[80vh] overflow-y-scroll" id="style-15">


      {/* Header */}
      <div className="flex flex-row mx-6 items-center">
        <div className="inline text-xl font-bold text-gray-800">
          IN TÀI LIỆU
        </div>
        <div className="inline text-l font-normal text-gray-800 ml-1">
          SPSS
        </div>

        <div className="flex-1 flex flex-row justify-end items-center">
          <span className="mr-2 font-semibold">Số giấy in trong tài khoản:</span>
          <span className="p-2 border border-black border-2 rounded-xl bg-white shadow-lg text-l font-bold ">
            {getUserBalance()}
          </span>
        </div>
      </div>

      {/* Upper section */}
      <div className="flex flex-col h-32 mx-6 my-4">
        <div className="flex flex-row h-16 my-1 items-center justify-between gap-4">
          <div className="w-8">
            <label
              className=" text-md font-semibold text-gray-700">
              Tên:
            </label>
          </div>
          <div className="w-96">
          <div
            className="w-full h-8 border border-gray-300 rounded-sm shadow-md flex items-center justify-between p-2 cursor-pointer"
            onClick={() => setOpenPrinterModal(true)}
          >
            <span>{selectedPrinter? `${selectedPrinter.real_name} - ${selectedPrinter.location} (${selectedPrinter.building})` : "Chọn máy in"}</span>
            <span className="text-gray-400">&#x25BC;</span>
          </div>
          </div>
          <div className="w-36">
            <button 
              className="p-1 w-full border border-gray-300 shadow-md hover:bg-gray-100 active:bg-gray-200 outline-none focus:ring-blue-300 focus:border-blue-300"
              onClick={() => setOpenPropertiesModal(true)}>
              Chỉnh đặc tính
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="p-1 w-24 h-12 bg-blue hover:bg-blue-200 active:bg-blue-100 rounded-lg font-bold text-white outline-none foncus:ring-4 focus:ring-lightblue focus:border-lightblue"
              onClick={handlePrintClick}>
              IN 
            </button>
          </div>
        </div>
        <div className="flex-1 my-1">
          <label className=" text-md font-semibold text-gray-700 mr-4">
            Số bản in:
          </label>
          <input
            type="number"
            className="border border-gray-300 rounded-sm px-3 py-2 w-16 shadow-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="100"
            step="1"
            value={copies}
            onChange={(e)=> setCopies(Number(e.target.value))}
          />
        </div>
      </div>
      

      {/* Content Area */}
      <div className="flex px-6">
        {/* Left Column */}
        <div className="relative w-2/3 border border-gray-300 rounded-lg bg-white p-4 flex flex-col space-y-6">
          <span className="absolute -top-4 left-[10%] transform -translate-x-1/2 bg-white px-1 text-gray-700">
            Xem trước
          </span>

          {/* File Input */}
          <div
            className="h-36 border-2 border-dashed rounded-md p-4 text-center text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => document.getElementById('fileInput').click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
            />
            {fileName ? (
              <p className="text-gray-700">{fileName}</p>  // Display the file name inside the box
            ) : (
              <p>Drag and drop files here, or click to select files.</p>
            )}
          </div>

          {/* File Preview */}
          {(filePreview || pdfPages) && fileType && (
            <>
              {fileType.startsWith("image") ? (
                <img
                  src={filePreview}
                  alt="Preview"
                  className="mt-4 rounded-md overflow-scroll"
                />
              ) : fileType === "application/pdf" ? (
                <div className="overflow-scroll max-h-[48rem] mt-4">
                  {pdfPages.map((page, index) => (
                    <img
                      key={index}
                      src={page}
                      alt={`PDF Page ${index + 1}`}
                      className="mb-4  rounded-md"
                    />
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-red-500">Unsupported file type</p>
              )}
            </>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/3 self-start border border-gray-300 rounded-lg bg-white p-6 space-y-6 ml-6">
          {/* Page Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Chọn số trang:
            </label>
            <div className="flex items-center mt-2">
              <label className="flex w-1/2 items-center">
                <input
                  type="radio"
                  name="pageRange"
                  className="mr-2"
                  onFocus={()=> setRange(`1-${maxPages}`)}
                />
                Tất cả trang
              </label>
              <label className="flex w-1/2 items-center">
                <input type="radio" name="pageRange" id="pageRange2" className="mr-2" 
                  onFocus={() => {
                    document.getElementById("pageRangeInput").focus(); // Focus the input when the radio button is focused
                  }}
                />
                Trang:
                <input
                  type="text"
                  id="pageRangeInput"
                  onChange={(e) => {
                    const value = e.target.value;
                    const isValid = /^\d+(-\d+)?$/.test(value);
                  
                    if (isValid || value === "") {
                      const parts = value.split("-");
                      if (parts.length === 2 && (Number(parts[0]) > Number(parts[1]) || Number(parts[0])<1 || Number(parts[1])>maxPages)) {
                        setRange("");
                      }
                      else if (Number(value)>maxPages || Number(value) < 1){
                        setRange("");
                      }
                      else setRange(value); 
                    }
                    else setRange("");
                  }}
                  onFocus={(e) => {
                    document.getElementById("pageRange2").checked=true;
                    const value = e.target.value;
                    const isValid = /^\d+(-\d+)?$/.test(value);
                    if (isValid || value === "") {
                      const parts = value.split("-");
                      if (parts.length === 2 && (Number(parts[0]) > Number(parts[1]) || Number(parts[0])<1 || Number(parts[1])>maxPages)) {
                        setRange("");
                      }
                      else if (Number(value)>maxPages || Number(value) < 1){
                        setRange("");
                      }
                      else setRange(value); 
                    }
                    else setRange("");
                  }}                
                  placeholder="e.g: 1, 5-9"
                  className="ml-2 pl-1 border border-gray-300 rounded-sm shadow-md focus:ring-blue-500 focus:border-blue-500 w-full"
                />
              </label>

            </div>
          </div>




          {/* Pages Per Sheet and Orientation */}
          <div className="flex space-x-6">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Số trang mỗi tờ:
              </label>
              <select
                value={pagesPerSheet}
                onChange={(e) => setPagesPerSheet(Number(e.target.value))}
                className="w-full mt-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Định hướng trang:
              </label>
              <select
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
                className="w-full mt-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Ngang">Ngang</option>
                <option value="Dọc">Dọc</option>
              </select>
            </div>
          </div>

          {/* Margin */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Căn lề:
            </label>
            <input
              type="number"
              step="0.01"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full mt-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Double-Sided Printing */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              In cả 2 mặt của tờ giấy:
            </label>
            <div className="flex items-center mt-2 space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isDoubleSided}
                  onChange={(e) => setIsDoubleSided(e.target.checked)}
                  className="mr-2"
                />
                In cả 2 mặt
              </label>
            </div>

            {isDoubleSided && (
              <div className="ml-4 mt-2 flex space-y-2 flex-col">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="flipOption"
                    value="dai"
                    checked={flipOption === "dai"}
                    onChange={() => setFlipOption("dai")}
                    className="mr-2"
                  />
                  Lật theo chiều dài giấy
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="flipOption"
                    value="rong"
                    checked={flipOption === "rong"}
                    onChange={() => setFlipOption("rong")}
                    className="mr-2"
                  />
                  Lật theo chiều rộng giấy
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <PrinterPropertiesModal
        propertiesModal={propertiesModal}
        setOpenPropertiesModal={setOpenPropertiesModal}
        paperSize={paperSize}
        setPaperSize={setPaperSize}
        selectedPrinter={selectedPrinter}
      />
      <PrinterSelectionModal
        isOpen={printerModal}
        onClose={() => setOpenPrinterModal(false)}
        onSelect={setSelectedPrinter}
        printersList={printersList}
      />

      <MessageModal 
        message={message} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        handleNavigation={handleNavigation} 
      />

      <PrintingProgressModal
        isOpen={progressModal}
        onClose={closeModal}
      />
    </div>
  );
};

export default Print;
