import React, { useEffect, useState } from "react"

const CustomSelect = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
    useEffect(()=>{
        const option = options.find(option=>option.value===value)
        setSelectedOption(option || null)
    },[value,options])
  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) onChange(option)
  }

  return (
    <div className="relative w-64">
  
      <div
        className="bg-transparent rounded-md px-4 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${selectedOption?.label?"font-semibold":""}`}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full z-10 max-h-40 overflow-y-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedOption?.value === option.value
                  ? "font-bold text-blue"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
