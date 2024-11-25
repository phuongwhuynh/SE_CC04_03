import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Printers } from "./components/Printers";
import Home from "./components/Home" // Thêm trang HomePage
// import OrderPage from "./pages/OrderPage"; // Thêm trang OrderPage
// import ReportPage from "./pages/ReportPage"; // Thêm trang ReportPage
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="order" element={<Order />} />
                    <Route path="report" element={<Report />} />
                    <Route path="setting" element={<Printers />} />
                    <Route path="users" element={<Users />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
