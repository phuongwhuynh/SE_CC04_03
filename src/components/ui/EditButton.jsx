import { CiEdit } from "react-icons/ci"
const EditButton = () => {
  return (
    <button className="flex items-center gap-2 border border-[#a4b0be] text-[#a4b0be] px-2 mt-6 rounded-md">
      <CiEdit />
      <span>Edit</span>
    </button>
  )
}
export default EditButton
