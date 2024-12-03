<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"
import Order from "./components/Order";
import { Printers } from "./components/Printers";
import Users from "./components/Users";
import Report from "./components/Report";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="order" element={<Order />} />
                    <Route path="report" element={<Report />} />
                    <Route path="setting" element={<Printers />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import { Printers } from "./components/Setting"
import "./App.css"
import Home from "./components/Home"
import Order from "./components/Order"
import Report from "./components/Report"
import Users from "./components/Users"
import { PrimeReactProvider } from "primereact/api"

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="order" element={<Order />} />
            <Route path="report" element={<Report />} />
            <Route path="setting" element={<Printers />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
>>>>>>> Anh
}

export default App;
