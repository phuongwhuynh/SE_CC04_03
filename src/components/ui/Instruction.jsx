import { GoLightBulb } from "react-icons/go"

const Instruction = () => {
  return (
    <>
      <div className="absolute left-[40%] rounded-full bg-[rgba(254,249,217,0.8)] p-2">
        <GoLightBulb className="text-3xl text-[#F1C40F]" />
      </div>
      <div className="bg-[rgba(237,242,251,0.8)] p-4 pt-6 m-6 rounded-md flex flex-col items-center justify-center gap-2">
        <p className="text-center text-sm">
          Nếu bạn chưa hiểu bất kể những gì trên giao diện này, hãy đọc hướng
          dẫn sử dụng của chúng tôi
        </p>
        <button className="bg-[#130F40] text-white px-2 py-1 rounded-sm text-sm">
          Click me
        </button>
      </div>
    </>
  )
}
export default Instruction
