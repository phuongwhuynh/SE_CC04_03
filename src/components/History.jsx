



import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context";
import './Home.css';


const rowsPerPage = 15;

const OrderSection = () => {
    const {logList, curStudent}=useContext(GlobalContext)
    const [currentPage, setCurrentPage] = useState(1);
    const logStudent = logList.filter(log => log.userid === curStudent.studentID);
    const reversedLogStudent = [...logStudent].reverse(); 

    // Helper function to calculate paginated data
    const paginateData = (data, page) => {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = page * rowsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(reversedLogStudent.length / rowsPerPage);
    const currentData = paginateData(reversedLogStudent, currentPage);

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
                        {/* <th>ID</th> */}
                        <th>Tài liệu</th>
                        <th>Số trang</th>
                        <th>Máy in</th>
                        {/* <th>ID sinh viên</th> */}
                        <th>Ngày</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={`${item.id}-${index}`}>
                            {/* <td>{item.id}</td> */}
                            <td>{item.filename}</td>
                            <td>{item.totalPages}</td>
                            <td>{item.printerName}</td>
                            {/* <td>{item.userid}</td> */}
                            <td>{item.dateTime}</td>
                            <td className={`status ${getStatusClass("Đã in")}`}>Đã in</td>
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

const History = () => {
  const { tab, setCurStudent } = useContext(GlobalContext);
  useEffect(() => {
    console.log("useEffect triggered");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setCurStudent(savedUser);  // Sets the state once the data is available
    }
  }, []); 
  return (
      <div style={{
          display: 'flex', marginTop: 20, flexDirection: 'column'
      }}>
          {
              tab === 'history' && 
              <OrderSection />}
      </div >
  );
}
export default History