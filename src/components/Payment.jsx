
import React, { useContext, useState, useEffect } from "react";
import { FaStar, FaCashRegister, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import successStar from '../assets/icons/successStar.png';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context"

//TODO: handle data to adjust PageBalance of user

const ErrorModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
    <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <FaExclamationTriangle className="text-red-700 text-6xl my-2"></FaExclamationTriangle>
      <p className="text-xl font-semibold">{message}</p>
      <div className="flex justify-center mt-4">
        <button
          onClick={onClose}
          className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-200 active:bg-blue-300"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>
);

const SuccessModal = ({ message, handleNavigation, total }) => (
  <div className="fixed inset-0 min-h-[calc(100vh-4rem)] bg-white flex flex-col items-center justify-center z-50 absolute">
    <div className="flex flex-col items-center justify-between bg-white p-6 max-w-sm w-full">
      <FaCheckCircle className="text-green-700 text-[6rem] my-2"></FaCheckCircle>
      <p className="text-xl font-semibold text-center py-2">{message}</p>
      <p className="text-md text-center mb-4 font-300 text-gray-700"> Quy trình thanh toán qua tài khoản BKPay đã thành công. Cảm ơn bạn đã sử dụng dịch vụ</p>
      <div className="border flex flex-col rounded-lg w-96 shadow-lg">
        <div className="px-2 pt-2 border-b flex flex-row w-full">
          <div className="w=1/4 m-2">
            <p className="mb-2">Số tiền:</p>
            <p className="py-2">Trạng thái: </p>
          </div>
          <div className="flex-1 my-2 mx-8">
            <img src={successStar}></img>
          </div>
          <div className="w=1/4 m-2">
            <p className="text-end mb-2 font-bold">{total.toLocaleString()} VND</p>
            <p className="rounded-lg bg-green-500 p-2 bg-opacity-30 text-[14px] font-bold text-green-600"> Thành công</p>
          </div>
        </div>
        <div className="p-4 flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="w-1/2">Mã giao dịch:</span>
            <span className="font-semibold flex-1 text-end">SV123456789</span>
          </div>
          <div className="flex justify-between">
            <span className="w-1/2">Số tài khoản:</span>
            <span className="font-semibold flex-1 text-end">0400XXXXXXXXXX</span>
          </div>
          <div className="flex justify-between">
            <span className="w-1/2">Thời gian:</span>
            <span className="font-semibold flex-1 text-end">
              {new Date().toLocaleString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false, 
              })}
            </span>          
          </div>
          <div className="flex justify-between">
            <span className="w-1/2">Nội dung:</span>
            <span className="font-semibold flex-1 text-end">Thanh toán mua thêm giấy in - SPSS</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handleNavigation("")}
        className="bg-black text-white font-bold p-4 mx-20 mb-20 rounded-lg hover:bg-gray-700 active:bg-gray-500">
        Về trang chủ
      </button>
      <button
        onClick={() => handleNavigation("service")}
        className="bg-blue text-white font-bold p-4 mx-20 mb-20 rounded-lg hover:bg-blue-200 active:bg-blue-300">
        Tiếp tục in tài liệu
      </button>
    </div>
  </div>
);

const Payment = () => {
  const {getUserBalance, updateUserBalance, setCurStudent, setTab} = useContext(GlobalContext);
  useEffect(() => {
    console.log("useEffect triggered");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setCurStudent(savedUser);  // Sets the state once the data is available
    }
  }, []); 


  const [quantities, setQuantities] = useState({
    package20: 1,
    package50: 0,
    package100: 0,
  });

  const prices = {
    package50: 25000,
    package20: 10000,
    package100: 50000,
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Success Modal state
  const navigate = useNavigate(); 

  const calculateTotal = () => {
    return (
      quantities.package50 * prices.package50 +
      quantities.package20 * prices.package20 +
      quantities.package100 * prices.package100
    );
  };

  const handleQuantityChange = (packageType, increment) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [packageType]: Math.max(prevQuantities[packageType] + increment, 0),
    }));
  };

  const handleSubmit = () => {
    if (quantities.package20 === 0 && quantities.package50 === 0 && quantities.package100 === 0) {
      setIsModalOpen(true); // Open the error modal if all quantities are zero
    } else {
      setIsSuccessModalOpen(true);
      updateUserBalance(20*quantities.package20+50*quantities.package50+100*quantities.package100);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };
  const handleNavigation = (path) => {
    if (path==="") setTab("home");
    else setTab(path);
    navigate('/'+path);
  }

  return (
    <div className="bg-gray-100 flex flex-col w-full relative h-[80vh] overflow-y-scroll" id="style-15">
      {/* Upper Section */}
      <div className="flex flex-row items-end mx-8 my-4 ">
        <span className="text-2xl font-bold px-2">THANH TOÁN ONLINE</span>
        <span className="text-xl font-semibold">SPSS</span>
      </div>
      <div className="mx-12 my-4 text-l">
        <span className="mr-2 font-semibold">Số giấy in trong tài khoản:</span>
        <span className="p-2 border border-black border-2 rounded-xl bg-white shadow-lg text-l font-bold ">
           {getUserBalance()}
        </span>
      </div>
        {/* Bottom Section */}
      <div className="max-w-[72rem] w-full mx-auto mt-4">
        <div className="bg-white shadow-lg mx-8 rounded-lg">
          {/* Header */}
          <div className="border-b border-gray-300 py-4 flex flex-row items-center justify-between">
            <span className="text-2xl font-bold mx-8 my-4">Thông tin thanh toán</span>
            <FaStar className="text-color-black text-3xl mx-8"></FaStar>
          </div>
          {/* Left column */}
          <div className="flex flex-row">
            <div className="mx-8 my-8 w-1/2">
              <span className="block text-xl font-bold text-gray-600 mb-6">Chọn gói</span>
              <div className="space-y-8 flex flex-col mx-4 max-w-xl">
                {/* Package 20 pages */}
                <div className="relative">
                  <div className="flex flex-col border justify-between overflow-hidden border-gray-500 shadow-lg rounded-lg">
                    <div className="flex bg-black h-12 items-center">
                      <span className="font-semibold text-white text-xl px-4">Gói 20 trang A4</span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">{prices.package20.toLocaleString()} VNĐ</span>
                      <div className="flex-1 flex flex-row items-center justify-end">
                        <button
                          className="text-xl font-bold px-3 py-1 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package20", -1)}
                        >
                          -
                        </button>
                        <button
                          className="text-xl font-bold px-3 py-1 ml-4 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package20", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 top-[-0.5rem] right-[-0.5rem] bg-red-700 text-white text-s font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {quantities.package20}
                  </div>
                </div>
                {/* Package 50 pages */}
                <div className="relative">
                  <div className="flex flex-col border justify-between overflow-hidden border-gray-500 shadow-lg rounded-lg">
                    <div className="flex bg-black h-12 items-center">
                      <span className="font-semibold text-white text-xl px-4">Gói 50 trang A4</span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">{prices.package50.toLocaleString()} VNĐ</span>
                      <div className="flex-1 flex flex-row items-center justify-end">
                        <button
                          className="text-xl font-bold px-3 py-1 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package50", -1)}
                        >
                          -
                        </button>
                        <button
                          className="text-xl font-bold px-3 py-1 ml-4 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package50", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 top-[-0.5rem] right-[-0.5rem] bg-red-700 text-white text-s font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {quantities.package50}
                  </div>
                </div>

                {/* Package 100 pages */}
                <div className="relative">
                  <div className="flex flex-col border justify-between overflow-hidden border-gray-500 shadow-lg rounded-lg">
                    <div className="flex bg-black h-12 items-center">
                      <span className="font-semibold text-white text-xl px-4">Gói 100 trang A4</span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">{prices.package100.toLocaleString()} VNĐ</span>
                      <div className="flex-1 flex flex-row items-center justify-end">
                        <button
                          className="text-xl font-bold px-3 py-1 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package100", -1)}
                        >
                          -
                        </button>
                        <button
                          className="text-xl font-bold px-3 py-1 ml-4 border border-gray-300 rounded w-10 h-10 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => handleQuantityChange("package100", 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 top-[-0.5rem] right-[-0.5rem] bg-red-700 text-white text-s font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {quantities.package100}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="mx-8 mt-24 flex flex-col border border-gray-300 rounded-lg shadow-lg w-1/2 max-w-96 self-start">
              <div className="flex items-center py-4 px-6 border-b border-gray-300">
                <FaCashRegister className="text-gray-700 text-xl"></FaCashRegister>
                <p className="mx-2 font-semibold text-xl">Tổng hóa đơn:</p>
                <div className="flex-1 flex flex-row justify-end">
                  <p className="text-xl font-bold">{calculateTotal().toLocaleString()} VNĐ</p>
                </div>
              </div>
              <div className="flex flex-row justify-end py-2 px-6">
                <button
                  className="bg-blue text-white font-bold py-2 px-4 rounded w-36 h-12 hover:bg-blue-200 active:bg-blue-300"
                  onClick={handleSubmit}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Modal */}
      {isModalOpen && <ErrorModal message="Chưa chọn gói thanh toán!" onClose={closeModal} />}
      {isSuccessModalOpen && (<SuccessModal message="THANH TOÁN THÀNH CÔNG!" handleNavigation={handleNavigation} total={calculateTotal()} />)}
    </div>
  );
};

export default Payment;
