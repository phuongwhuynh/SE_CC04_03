import { Link } from 'react-router-dom'
import hcmut from '../../assets/hcmut.png'
import { IoLogInOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center pl-8 w-full"
    //   style={{
    //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    //   }}
    >
      <Link to="/" key={1}>
        <div className="flex items-center gap-4">
          <img src={hcmut} className="w-[3rem]" />
          <p className="text-3xl font-bold text-blue">HCMUT SPSS</p>
        </div>
      </Link>
      <Link to="/login" key={2}>
        <div className="buttonOwn">
          <a href="#" className="relative">
            <div className="flex items-center gap-2">
              <IoLogInOutline className="text-xl" />
              <span className="ml-1">Đăng nhập</span>
            </div>
          </a>
        </div>
      </Link>
    </div>
  )
}
export default Navbar