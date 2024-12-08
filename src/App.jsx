
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom"
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
import { useState, useEffect, useContext } from "react"
import History from "./components/History"
import Notification from "./components/Notification"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import WelcomePage from "./components/WelcomePage"
import { GlobalContext } from "./context"

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
  const {setTab} = useContext(GlobalContext)
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
  useEffect(() => {
    const path = location.pathname
    if (path === "/") setTab("home")
    else if (path.includes("order")) setTab("order")
    else if (path.includes("report")) setTab("report")
    else if (path.includes("setting")) setTab("setting")
    else if (path.includes("users")) setTab("users")
    else if (path.includes("service")) setTab("service")
    else if (path.includes("history")) setTab("history")
    else if (path.includes("payment")) setTab("payment")
    else setTab("")
  }, [location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
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