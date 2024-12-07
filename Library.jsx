import { useContext, useState } from "react";
import { GlobalContext } from "../context";
import './Home.css';

const printData = [
    { id: "00001", file_info: "Nguyễn Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00002", file_info: "Nguyễn Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS2-P1", status: "Đang in" },
    { id: "00003", file_info: "Nguyễn Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Lỗi" },
    { id: "00004", file_info: "Nguyễn Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00005", file_info: "Nguyễs Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đang in" },
    { id: "00006", file_info: "Nguyễn Văn A",num_page:"2", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
];




const PrintTable = ({ data }) => {
    const getStatusClass = (status) => {
        if (status === "Đã in") return "printed";
        if (status === "Đang in") return "in-progress";
        if (status === "Lỗi") return "errored";
        return "";
    };

    return (
        <table className='recent-print'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>File in</th>
                    <th>Số trang</th>
                    <th>Ngày</th>
                    <th>Máy in</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.file_info}</td>
                        <td>{item.num_page}</td>
                        <td>{item.date}</td>
                        <td>{item.printer}</td>
                        <td>
                            <span className={`status ${getStatusClass(item.status)}`}>
                                {item.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


const printPurchase = [
    { id: "00001", num_pages: 10, paper_type: "A4", cost: "$5.00", date: "2024/11/10 15:11:35", status: "Đã in" },
    { id: "00002", num_pages: 5, paper_type: "A5", cost: "$2.50", date: "2024/11/10 15:11:35", status: "Đang in" },
    { id: "00003", num_pages: 20, paper_type: "A3", cost: "$10.00", date: "2024/11/10 15:11:35", status: "Lỗi" },
    { id: "00004", num_pages: 15, paper_type: "A2", cost: "$15.00", date: "2024/11/10 15:11:35", status: "Đã in" },
    { id: "00005", num_pages: 8, paper_type: "Letter", cost: "$4.00", date: "2024/11/10 15:11:35", status: "Đang in" },
    { id: "00006", num_pages: 12, paper_type: "A4", cost: "$6.00", date: "2024/11/10 15:11:35", status: "Đã in" },
];

const PrintTablePurchase = ({ data }) => {
    const getStatusClass = (status) => {
        if (status === "Đã in") return "printed";
        if (status === "Đang in") return "in-progress";
        if (status === "Lỗi") return "errored";
        return "";
    };

    return (
        <table className='recent-print'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Số trang</th>
                    <th>Loại giấy</th>
                    <th>Chi phí</th>
                    <th>Ngày</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.num_pages}</td>
                        <td>{item.paper_type}</td>
                        <td>{item.cost}</td>
                        <td>{item.date}</td>
                        <td>
                            <span className={`status ${getStatusClass(item.status)}`}>
                                {item.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const OrderSection = () => (
    <div className="right-section">
       
        <div className="div4">
            <div className="info">
                <h2>Đơn in gần đây</h2>
                <a href="#" className="show-more">Show more...</a>
            </div>
            <PrintTable data={printData} />
        </div>
        
        <div className="div4">
            <div className="info">
                <h2>Lịch sử giao dịch</h2>
                <a href="#" className="show-more">Show more...</a>
            </div>
            <PrintTablePurchase data={printPurchase} />
        </div>
    </div>
);

const Footer = () => (
    <div className="right-footer">
        <div className="copyright">
            <strong>Copyright © 2024</strong>{' '}
            <span className="underline">Academic Affairs Office.</span> All rights reserved.
        </div>
        <div className="version">Version 2.4.0</div>
    </div>
);
const Order = () => {
    const { tab } = useContext(GlobalContext);
    return (
        <div style={{
            display: 'flex', marginTop: 20, flexDirection: 'column'
        }}>
            {tab === 'order' && <OrderSection />}
            {<Footer />}
        </div >
    );
}
export default Order