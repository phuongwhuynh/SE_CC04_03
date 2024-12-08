import { useContext, useState } from 'react'
import hcmut from '../assets/hcmut.png'
import { BiSolidMessageError } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from '../context'

const Login = () => {
    const {usersList} = useContext(GlobalContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState([]);
    const navigate = useNavigate()
    const handleLogin = ()=>{
        if(!email && !password){
            setError([
              "Hãy nhập mật khẩu của bạn.",
              "Hãy nhập email của bạn.",
            ])
            setEmail("");
            setPassword("");
            return;
        }else if(email && !password){
            setError(["Hãy nhập mật khẩu của bạn."]);
            return;
        }else if(!email && password){
            setError(["Hãy nhập email của bạn."])
            setPassword("");
            return;
        }
        let exist = false;
        let user_data = null;
        usersList.forEach((acc) => {
          if (acc.email == email) {
            exist = true
            if (acc.password != password) {
              setError(["Sai mật khẩu"])
              setPassword("")
              return
            }
            user_data = acc
          }
        })
        if(!exist){
            setError((prevErrors) => [...prevErrors, "Email không tồn tại"])
            setPassword("");
            return;
        }
        console.log(user_data)
        const userData = {
          email,
            name: user_data.name,
            major: user_data.major,
            studentID: user_data.studentID,
            role: user_data.role,
          timestamp: new Date().toISOString(),
        }
        localStorage.setItem("user", JSON.stringify(userData));
        setError([]);
        navigate("/")
    }
  return (
    <div className="flex flex-col items-center bg-[#E9EFEC] w-full h-full lg:h-[100vh]">
      <div className="w-[85%] bg-white">
        <div className="bg-blue text-white mt-2 flex gap-4 text-2xl font-bold items-center p-3">
          <div>
            <img src={hcmut} className="w-12 h-12" />
          </div>
          <p>DỊCH VỤ XÁC THỰC TẬP TRUNG</p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row md:flex-row">
          <div className="m-2 bg-[#E9EFEC] p-4 rounded-sm lg:w-[40%]">
            {error.length>0?
            <div className="login-error flex gap-4 border-dotted border-red-600 border-2 p-4 bg-[rgba(220,38,38,0.1)] text-red-600 items-center">
              <BiSolidMessageError className="text-6xl " />
              <div>
                {error.map(err=><p>{err}</p>)}
              </div>
            </div>
            : null}
            <div className="mt-2 mb-2">
              <p className="font-bold text-lg text-red-800">
                Nhập thông tin tài khoản của bạn
              </p>
              <hr className="border-gray-300 border-1 mt-1" />
              <div className="my-2">
                <div className="flex flex-col gap-1">
                  <label
                    for="email"
                    className="font-bold text-gray-600 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    className="outline-none bg-[#FFF6E3] py-1 px-2"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label for="pwd" className="font-bold text-gray-600 text-sm">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="pwd"
                    id="pw"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    className="outline-none bg-[#FFF6E3] py-1 px-2"
                  />
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="noti"
                    id="noti"
                    className="outline-none bg-[#FFF6E3] py-1 px-2"
                  />
                  <label for="noti" className="text-sm text-gray-600">
                    Cảnh báo trước khi tôi đăng nhập vào các trang web khác.
                  </label>
                </div>
                <hr className="border-gray-300 border-1 mt-2" />
                <div className="flex gap-2 text-sm mt-2 mb-1">
                  <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-md"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    }}
                    onClick={handleLogin}
                  >
                    Đăng nhập
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-md"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    }}
                    onClick={e=>{
                        setEmail("");
                        setPassword("");
                        setError([]);
                    }}
                  >
                    Xóa
                  </button>
                </div>
                <a href="#" className="text-blue-600 text-sm underline">
                  Thay đổi mật khẩu?
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] m-2 mt-6 mr-20">
            <p className="font-bold text-md text-red-800">Lưu ý</p>
            <p className="ml-2 text-sm mt-1">
              Trang đăng nhập này cho phép đăng nhập một lần đến nhiều hệ thống
              web ở trường Đại học Bách Khoa Tp.HCM. Điều này có nghĩa là bạn
              chỉ đăng nhập một lần cho những hệ thống web đã đăng ký với hệ
              thống xác thực quản lý truy cập tập trung.
            </p>
            <p className="ml-2 text-sm mt-2">
              Bạn cần dùng tài khoản HCMUT để đăng nhập. Tài khoản HCMUT cho
              phép truy cập đến nhiều tài nguyên bao gồm hệ thống thông tin, thư
              điện tử, ...
            </p>
            <p className="ml-2 text-sm mt-2">
              Vì lý do an ninh, bạn hãy Thoát khỏi trình duyệt Web khi bạn kết
              thúc việc truy cập các dịch vụ đòi hỏi xác thực!
            </p>

            <p className="font-bold text-md text-red-800 mt-6">
              Hỗ trợ kỹ thuật
            </p>
            <div className="flex gap-4 text-sm mt-1">
              <p>
                E-mail:{" "}
                <span>
                  <a href="#" className="text-blue-600 underline">
                    support@hcmut.edu.vn
                  </a>
                </span>
              </p>
              <p>ĐT: (84-8) 38647256 - 5200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm my-4">
        <p>Bản quyền © 2011 - 2012 Đại học Bách Khoa Tp. Hồ Chí Minh.</p>
        <p>
          Được hỗ trợ bởi{" "}
          <a href="#" className="text-blue-600 underline">
            Jasig CAS 3.5.1{" "}
          </a>
        </p>
      </div>
    </div>
  )
}
export default Login