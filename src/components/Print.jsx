import React, { useState, useEffect } from "react";
import * as pdfjs from 'pdfjs-dist/build/pdf';

// TO-DO: wrap necassary info of successfully printed document and push to global context 

pdfjs.GlobalWorkerOptions.workerSrc = '/node_modules/pdfjs-dist/build/pdf.worker.mjs';
const printers = [
  { name: "Brother HL - L2321D (CS1-H1)", location: "Office 1", brand: "Brother" },
  { name: "HP LaserJet Pro MFP", location: "Office 2", brand: "HP" },
  { name: "Canon PIXMA", location: "Office 3", brand: "Canon" },
  { name: "Epson EcoTank", location: "Office 4", brand: "Epson" }
];

const PrinterPropertiesModal = ({ propertiesModal, setOpenPropertiesModal, paperSize, setPaperSize }) => {
  if (!propertiesModal) return null; // Return null if the modal is not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">
            Brother HL - L2321D Properties Settings
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
            <h3 className="text-gray-800 font-medium mb-2">Paper / Output:</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Paper size:</span>
              <select
                className="mt-1 block w-16 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={paperSize}
                onChange={(e) => setPaperSize(e.target.value)}
              >
                <option>A4</option>
                <option>A3</option>
                <option>Letter</option>
              </select>
            </div>
          </div>

          {/* Printer Features Section */}
          <div>
            <h3 className="text-gray-800 font-medium mb-2">Printer Features:</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700">Print Quality: </span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Draft</option>
                  <option selected>Normal</option>
                  <option>High Quality</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Page Order:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Right, then Down</option>
                  <option>Down, then Right</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Grayscale:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Color</option>
                  <option selected>Grayscale</option>
                  <option>Monochrome</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Reverse Print:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>Off</option>
                  <option>On</option>
                </select>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Watermark:</span>
                <select className="text-blue text-right cursor-pointer bg-transparent border-none focus:ring-0 focus:outline-none">
                  <option>None</option>
                  <option>Custom</option>
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
          Close
        </button>
      </div>
    </div>
  );
};

const PrinterSelectionModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-1/3 p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">Select a Printer</h3>
        <ul>
          {printers.map((printer, index) => (
            <li
              key={index}
              className="border-b py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onSelect(printer);
                onClose();
              }}
            >
              <div>
                <strong>{printer.name}</strong>
              </div>
              <div>Location: {printer.location}</div>
              <div>Brand: {printer.brand}</div>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 w-full py-2 bg-blue text-white rounded-md hover:bg-blue-200 active:bg-blue-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};



const MessageModal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Message</h2>
        <p>{message}</p>
        <button
          className="mt-4 w-full p-2 bg-blue text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Print = () => {
  const [selectedPrinter, setSelectedPrinter]=useState(null);
  const [copies, setCopies] = useState(1);
  const [maxPages, setMaxPages]=useState(1);
  const [range, setRange] = useState("");
  const [pagesPerSheet, setPagesPerSheet] = useState(1);
  const [orientation, setOrientation] = useState("Dọc");
  const [margin, setMargin] = useState(0.02);
  const [isDoubleSided, setIsDoubleSided] = useState(false);
  const [flipOption, setFlipOption] = useState("dai");
  const [filePreview, setFilePreview] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);
  const [fileName, setFileName] = useState('');
  const [paperSize, setPaperSize]=useState('A4');
  const [totalPages, setTotalPages]=useState(0);

  const [printerModal, setOpenPrinterModal]=useState(false);
  const [propertiesModal, setOpenPropertiesModal]=useState(false);
  const [message, setMessage] = useState(""); // To store the message to show in modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

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
    if (!filePreview && pdfPages.length === 0) {
      setMessage("You have not input a file.");
      setIsModalOpen(true);
    } else if (!range) {
      setMessage("The range is invalid.");
      setIsModalOpen(true);
    } else {
      setMessage("Print successful!");
      const parts=range.split("-");
      if (parts.length===2){
        setTotalPages((Number(parts[1])-Number(parts[0])+1)*copies);
      }
      else setTotalPages(copies);

      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">

      {/*Properties modal*/}
      <PrinterPropertiesModal
        propertiesModal={propertiesModal}
        setOpenPropertiesModal={setOpenPropertiesModal}
        paperSize={paperSize}
        setPaperSize={setPaperSize}
      />
      <PrinterSelectionModal
        isOpen={printerModal}
        onClose={() => setOpenPrinterModal(false)}
        onSelect={setSelectedPrinter}
      />

      <MessageModal message={message} isOpen={isModalOpen} onClose={handleCloseModal} />
      
      {/* Header */}
      <div className="mx-6 my-4">
        <div className="inline text-xl font-bold text-gray-800">
          IN TÀI LIỆU
        </div>
        <div className="inline text-l font-normal text-gray-800 ml-1">
          SPSS
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
            <span>{selectedPrinter ? selectedPrinter.name : "Select a Printer"}</span>
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
    </div>
  );
};

export default Print;
