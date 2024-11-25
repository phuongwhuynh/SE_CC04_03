import * as React from "react"

import { IoIosCamera } from "react-icons/io"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import { GlobalContext } from "../../context"
import avatar from "../../assets/avatar.jpg"
import EditButton from "./EditButton"
import { managers } from "../../utils/utils"
import { FaPlus } from "react-icons/fa6"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function UserSetting() {
  const { openUserSetting, setOpenUserSetting } =
    React.useContext(GlobalContext)

  const handleClose = () => {
    setOpenUserSetting(false)
  }

  return (
    <React.Fragment>
      <Dialog
        open={openUserSetting}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>
          <p className="text-3xl font-semibold">Cài đặt</p>
        </DialogTitle>
        <hr></hr>
        <DialogContent>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-6 relative">
                <IoIosCamera className="absolute text-[#2f3542] text-3xl bg-[#ced6e0] rounded-full p-0.5 bottom-[-5px] left-[55px] cursor-pointer" />
                <div>
                  <img src={avatar} className="w-24 rounded-full" />
                </div>
                <div className="text-[#2f3542]">
                  <p className="font-bold text-lg text-black">Nguyễn Văn A</p>

                  <p>HCMUT SPSO</p>
                </div>
              </div>
              <div>
                <EditButton />
              </div>
            </div>
            <div className="my-4 border border-[#d6cece] rounded-md pl-4 pb-4 pr-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Thông tin cá nhân</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-sm">Họ Tên</p>
                  <p className="font-semibold">Nguyễn Văn A</p>
                </div>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-semibold">anh.huynhanh@hcmut.edu.vn</p>
                </div>
                <div>
                  <p className="text-sm">Số điện thoại</p>
                  <p className="font-semibold">0978390822</p>
                </div>
              </div>
            </div>
            <div className="my-4 border border-[#d6cece] rounded-md p-4 text-center">
              <p className="text-lg font-semibold mb-2">Management Team</p>
              <hr></hr>
              <div className="flex justify-between mt-4 mx-8">
                <div>
                  <div
                    className="w-12 h-12 border-[#a4b0be] border-dashed flex items-center justify-center p-2 rounded-lg text-[#a4b0be] mb-1"
                    style={{ borderWidth: "3px" }}
                  >
                    <FaPlus />
                  </div>
                  <p className="text-sm font-semibold">Add</p>
                </div>
                {managers.map((manager, i) => (
                  <div key={i}>
                    <img
                      src={manager.avatar}
                      className="w-12 rounded-full border border-[#d6cece] mb-1"
                    />
                    <p className="text-sm font-semibold">{manager.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-red-500 text-white rounded-sm py-1 px-2 my-2 mx-2 cursor-pointer delete-btn ">
              Khóa tài khoản
            </button>
          </div>
        </DialogContent>
        <DialogActions className="flex justify-between w-full setting-btn mt-4">
          <div className="flex justify-start w-full mb-4 ml-4">
            <button className="bg-red-600 text-white">Log out</button>
          </div>
          <div className="flex justify-end gap-4 mb-4 mr-4">
            <button
              onClick={handleClose}
              className="text-[#57606f] border border-[#57606f]"
            >
              Cancel
            </button>
            <button onClick={handleClose} className="bg-blue-300 text-white">
              Save
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}