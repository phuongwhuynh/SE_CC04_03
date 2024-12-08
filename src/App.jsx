
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Layout from "./components/Layout"
import { Printers } from "./components/Setting"
import "./App.css"
import Home from "./components/Home"
import Order from "./components/Order"
import Report from "./components/Report"
import Users from "./components/Users"
import { PrimeReactProvider } from "primereact/api"
import Login from "./components/Login"
import { getUserRole } from "./utils/utils"
import UserHome from "./components/UserHome"
import Service from "./components/Service"
import Payment from "./components/Payment"
import { useState, useEffect } from "react"
import History from "./components/History"
import Notification from "./components/Notification"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <AppWithNavigate />
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

function AppWithNavigate() {
  const [role, setRole] = useState(getUserRole())
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user && user.role !== role) {
      setRole(user.role)
      navigate("/") 
      toast.success(`Chào mừng trở lại, ${user.name.split(" ").at(-1)}!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
    }
  }, [role, navigate])

  return (
    <>
      <Routes>
        {role === "spso" && (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="order" element={<Order />} />
            <Route path="report" element={<Report />} />
            <Route path="setting" element={<Printers />} />
            <Route path="users" element={<Users />} />
          </Route>
        )}
        {role === "student" && (
          <Route path="/" element={<Layout />}>
            <Route index element={<UserHome />} />
            <Route path="service" element={<Service />} />
            <Route path="history" element={<History />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        )}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Notification/>
    </>
  )
}

export default App