import { useContext } from "react"
import { MdOutlineDisplaySettings } from "react-icons/md"
import { GlobalContext } from "../../context"

const SettingButton = ({ model }) => {
  const {setCurPrinter} = useContext(GlobalContext);

  return (
    <button
      className={`flex items-center gap-2 px-4 py-1 mt-1 rounded-md font-semibold text-white transition-all duration-200 ${
        model.status === "rest"
          ? "bg-blue-200 shadow-[4px_4px_0px_#03346E] hover:shadow-[2px_2px_0px_#022E5A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#022E5A]"
          : "bg-gray-500 cursor-not-allowed shadow-[4px_4px_0px_#4B5563]"
      }`}
      disabled={model.status !== "rest"}
      onClick={()=>{setCurPrinter(model);console.log(model)}}
    >
      <span className="relative inline-block transition-all duration-200">
        <MdOutlineDisplaySettings />
      </span>
      <span className="relative" >Cài đặt</span>
    </button>
  )
}

export default SettingButton
