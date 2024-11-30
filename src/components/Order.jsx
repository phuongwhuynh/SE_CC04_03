import { useContext, useState } from "react";
import { GlobalContext } from "../context";
import './Home.css';
const printHistory = [
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" },
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" },
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" },
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" },
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" },
    { id: "00001", file: "KTCT.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00002", file: "finalTest.docx", pages: 30, printer: "CS1 - P2", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00003", file: "minhchung.png", pages: 30, printer: "CS1 - P10", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Lỗi" },
    { id: "00004", file: "assignment-1.pdf", pages: 30, printer: "CS2 - P3", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đã in" },
    { id: "00005", file: "MMref.pdf", pages: 30, printer: "CS1 - P1", mail: "anh.huynhanh@hcmut.edu.vn", date: "2024/21/10 15:11:35", status: "Đang in" }
];


const rowsPerPage = 15;

const OrderSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Helper function to calculate paginated data
    const paginateData = (data, page) => {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = page * rowsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(printHistory.length / rowsPerPage);
    const currentData = paginateData(printHistory, currentPage);

    // Status class mapping
    const getStatusClass = (status) => {
        switch (status) {
            case "Đã in":
                return "success";
            case "Lỗi":
                return "error";
            case "Đang in":
                return "pending";
            default:
                return "";
        }
    };

    // Change page handler
    const changePage = (direction) => {
        if (direction === -1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 1 && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="right-section right-section-js">
            <h2 className="his-name">Lịch sử in</h2>
            <table className="print-history-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tài liệu</th>
                        <th>Số trang</th>
                        <th>Máy in</th>
                        <th>Mail</th>
                        <th>Ngày</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={`${item.id}-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.file}</td>
                            <td>{item.pages}</td>
                            <td>{item.printer}</td>
                            <td>{item.mail}</td>
                            <td>{item.date}</td>
                            <td className={`status ${getStatusClass(item.status)}`}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    className="page-btn"
                    onClick={() => changePage(-1)}
                    disabled={currentPage === 1}
                >
                    ❮
                </button>
                <span id="page-info">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="page-btn"
                    onClick={() => changePage(1)}
                    disabled={currentPage === totalPages}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

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