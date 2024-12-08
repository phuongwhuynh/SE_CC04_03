import React from "react"
import { ToastContainer } from "react-toastify"
const Notification = () => {
  return (
    <div className="">
      <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}
export default Notification