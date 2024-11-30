import * as React from "react"
import Button from "@mui/material/Button"
import { IoIosCamera } from "react-icons/io"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import { GlobalContext } from "../../context"
import avatar from "../../assets/avatar.jpg"
import EditButton from "./EditButton"

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
                  <p>2252022</p>
                  <p>Khoa học máy tính</p>
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
          </div>
        </DialogContent>
        <DialogActions className="flex justify-between w-full">
          <div className="flex justify-start w-full ml-2">
            <Button onClick={() => {}}>Log out</Button>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
