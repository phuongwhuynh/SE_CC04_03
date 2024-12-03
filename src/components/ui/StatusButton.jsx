

const StatusButton = ({ model,size }) => {
  const getButtonStyle = (model) => {
    let baseStyle = `${
      size == "small"
        ? "text-[11px] font-normal w-16"
        : "text-[13px] font-semibold w-20"
    } rounded-md py-1`
    switch (model.status) {
      case "error":
        return `${baseStyle} text-[#EF3826] bg-[rgba(239,56,38,0.3)]`
      case "rest":
        return `${baseStyle} text-[#00B69B] bg-[rgba(0,182,155,0.3)]`
      case "done":
        return `${baseStyle} text-[#00B69B] bg-[rgba(0,182,155,0.3)]`
      default:
        return `${baseStyle} text-[#6226EF] bg-[rgba(98,38,239,0.3)]`
    }
  }

  return (
    <button className={getButtonStyle(model)}>
      {model.status === "error" ? "Lỗi" : model.status === "rest" ? "Nghỉ ngơi" :(model.status=="done"?"Đã in": "Đang in")}
    </button>
  )
}

export default StatusButton
