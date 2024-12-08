import React, { useState } from "react"
import { FaStar, FaCashRegister, FaExclamationTriangle } from "react-icons/fa"

//TODO: handle data to adjust PageBalance of user, style the payment success page

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
)

const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50 ">
    <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <FaStar className="text-green-700 text-6xl my-2"></FaStar>
      <p className="text-xl font-semibold text-green-700">{message}</p>
      <div className="flex justify-center mt-4">
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-200 active:bg-green-300"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>
)
const Payment = () => {
  const [quantities, setQuantities] = useState({
    package20: 1,
    package50: 0,
    package100: 0,
  })

  const prices = {
    package50: 25000,
    package20: 10000,
    package100: 50000,
  }

  const [isModalOpen, setIsModalOpen] = useState(false) // Modal state
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false) // Success Modal state

  const calculateTotal = () => {
    return (
      quantities.package50 * prices.package50 +
      quantities.package20 * prices.package20 +
      quantities.package100 * prices.package100
    )
  }

  const handleQuantityChange = (packageType, increment) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [packageType]: Math.max(prevQuantities[packageType] + increment, 0),
    }))
  }

  const handleSubmit = () => {
    if (
      quantities.package20 === 0 &&
      quantities.package50 === 0 &&
      quantities.package100 === 0
    ) {
      setIsModalOpen(true) // Open the error modal if all quantities are zero
    } else {
      setIsSuccessModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
  }
  return (
    <div
      className=" bg-gray-100 flex flex-col w-full relative h-[80vh] overflow-y-scroll"
      id="style-15"
    >
      {/* Upper Section */}
      <div className="flex flex-row items-end mx-8 my-4 ">
        <span className="text-2xl font-bold px-2">THANH TOÁN ONLINE</span>
        <span className="text-xl font-semibold">SPSS</span>
      </div>
      <span className="block text-l mx-12 mb-8"> Mua thêm giấy in tại đây</span>

      {/* Bottom Section */}
      <div className="max-w-[72rem] w-full mx-auto mt-4">
        <div className="bg-white shadow-lg mx-8 rounded-lg">
          {/* Header */}
          <div className="border-b border-gray-300 py-4 flex flex-row items-center justify-between">
            <span className="text-2xl font-bold mx-8 my-4">
              Thông tin thanh toán
            </span>
            <FaStar className="text-color-black text-xl mx-8"></FaStar>
          </div>
          {/* Left column */}
          <div className="flex flex-row">
            <div className="mx-8 my-8 w-1/2">
              <span className="block text-xl font-bold text-gray-600 mb-6">
                Chọn gói
              </span>
              <div className="space-y-8 flex flex-col mx-4 max-w-xl">
                {/* Package 20 pages */}
                <div className="relative">
                  <div className="flex flex-col border justify-between overflow-hidden border-gray-500 shadow-lg rounded-lg">
                    <div className="flex bg-black h-12 items-center">
                      <span className="font-semibold text-white text-xl px-4">
                        Gói 20 trang A4
                      </span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">
                        {prices.package20.toLocaleString()} VNĐ
                      </span>
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
                      <span className="font-semibold text-white text-xl px-4">
                        Gói 50 trang A4
                      </span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">
                        {prices.package50.toLocaleString()} VNĐ
                      </span>
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
                      <span className="font-semibold text-white text-xl px-4">
                        Gói 100 trang A4
                      </span>
                    </div>
                    <div className="flex flex-row items-center p-4">
                      <span className="text-black font-bold text-xl">
                        {prices.package100.toLocaleString()} VNĐ
                      </span>
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
                  <p className="text-xl font-bold">
                    {calculateTotal().toLocaleString()} VNĐ
                  </p>
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
      {isModalOpen && (
        <ErrorModal message="Chưa chọn gói thanh toán!" onClose={closeModal} />
      )}
      {isSuccessModalOpen && (
        <SuccessModal
          message="Mua hàng thành công!"
          onClose={closeSuccessModal}
        />
      )}
    </div>
  )
}

export default Payment
