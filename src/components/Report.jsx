import {
  FaDollarSign,
  FaClipboardList,
  FaPrint,
  FaUserAlt,
} from "react-icons/fa"
import { Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import "./Report.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Report = () => {
  const barData = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
    datasets: [
      {
        label: "Doanh thu (VND)",
        data: [150, 200, 170, 300, 250, 400, 350],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  const pieDataDay = {
    labels: ["Doanh thu trong ngày"],
    datasets: [
      {
        data: [500, 8000 - 500],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(201, 203, 207, 0.2)"],
        borderWidth: 1,
      },
    ],
  }

  const pieDataMonth = {
    labels: ["Doanh thu trong tháng"],
    datasets: [
      {
        data: [8000, 10000 - 8000],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(201, 203, 207, 0.2)"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="report-container h-[80vh] overflow-y-scroll" id="style-15">
      <div className="breadcrumb">
        <span>Bảng điều khiển</span> &gt; <span>Báo cáo</span>
      </div>

      <h1 className="page-title">Báo cáo hàng tuần và hàng tháng</h1>

      <div className="summary-cards">
        <div className="card">
          <FaDollarSign className="icon" />
          <span className="amount">220k VND</span>
          <span className="label">Tổng tiền thu</span>
        </div>
        <div className="card">
          <FaClipboardList className="icon" />
          <span className="amount">30</span>
          <span className="label">Yêu cầu đã xử lý</span>
        </div>
        <div className="card">
          <FaPrint className="icon" />
          <span className="amount">200</span>
          <span className="label">Trang giấy bán ra</span>
        </div>
        <div className="card">
          <FaUserAlt className="icon" />
          <span className="amount">20</span>
          <span className="label">Số sinh viên đăng nhập</span>
        </div>
      </div>

      <div className="report-details">
        <div className="chart-row-1">
          <div className="chart-container">
            <h3 className="section-title">Doanh thu trong tuần</h3>
            <Bar data={barData} options={options} />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-container">
            <h3 className="section-title">Doanh thu trong ngày</h3>
            <Pie data={pieDataDay} />
          </div>
          <div className="chart-container">
            <h3 className="section-title">Doanh thu trong tháng</h3>
            <Pie data={pieDataMonth} />
          </div>
        </div>

        <h3 className="section-title">Đơn in gần đây</h3>
        <table className="recent-orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Ngày</th>
              <th>Máy in</th>
              <th>Số tiền đã trả (VND)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00001</td>
              <td>Nguyễn Văn A</td>
              <td>anh.huynhanh@hcmut.edu.vn</td>
              <td>2024/12/01</td>
              <td>CS1-P12</td>
              <td>150k</td>
            </tr>
            <tr>
              <td>00002</td>
              <td>Nguyễn Văn B</td>
              <td>anh.huynhanh@hcmut.edu.vn</td>
              <td>2024/12/02</td>
              <td>CS2-P1</td>
              <td>200k</td>
            </tr>
            <tr>
              <td>00003</td>
              <td>Nguyễn Văn C</td>
              <td>anh.huynhanh@hcmut.edu.vn</td>
              <td>2024/12/03</td>
              <td>CS3-P5</td>
              <td>100k</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Report
