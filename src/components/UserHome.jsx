import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import './UserHome.css';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend);

const UserHome = () => {
  const progressData = [
    { icon: "📘", label: "80/200 trang đã in", percentage: 40, color: "#03346E", bgColor: "#E2E2B6" },
    { icon: "✅", label: "11 tài liệu đã in", percentage: 100, color: "#2B8068", bgColor: "#41B3A2" },
  ];
  const usageStatisticsData = {
    labels: ['6/2024', '7/2024', '8/2024', '9/2024', '10/2024', '11/2024', '12/2024'],
    datasets: [
      {
        label: 'Số lần sử dụng',
        data: [15, 10, 25, 20, 30, 22, 40],
        backgroundColor: 'orange',
      },
    ],
  };
  const weeklyActivityData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Số lần sử dụng',
        data: [5, 10, 0, 5, 7, 3, 10],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        tension: 0.3,
      },
    ],
  };
  const doughnutData = {
    labels: ['Tháng này', 'Các tháng trước đó'],
    datasets: [
      {
        data: [16, 84],
        backgroundColor: ['#8B5CF6', '#F87171'], // Màu tím và màu đỏ
        hoverBackgroundColor: ['#7C3AED', '#EF4444'],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="user-home h-[80vh] overflow-y-scroll" id="style-15">
      <h1 className="header"><b>Ứng dụng</b> SPSS</h1>
      <main className="main-content">
        <div className='div1'>
          <section className="usage-statistics">
            <h2>Thống kê sử dụng</h2>
            <div className="chart">
              <Bar data={usageStatisticsData} />
            </div>
          </section>
          <div>

            <div className="login-info">
              <p>Lượt đăng nhập gần nhất: </p>
              <p><strong>2024/10/17 12:31:32</strong></p>
              <p>Tổng lượt đăng nhập: <strong>276</strong></p>
            </div>
            <section className="progress-section">
              {progressData.map((item, index) => (
                <div className="progress-card" key={index}>
                  <div className="progress-icon">{item.icon}</div>
                  <div className="progress-details">
                    <p>{item.label}</p>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <div
                        className="progress-bar-bg"
                        style={{
                          backgroundColor: item.bgColor,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

        </div>
        <div className='div2'>
          <section className="weekly-activity">
            <h2>Hoạt động trong tuần</h2>
            <div className="chart">
              <Line data={weeklyActivityData} />
            </div>
          </section>
          <section className="summary">
            <h2>Tổng chỉ tiêu</h2>
            <div className="chart">
              <Doughnut data={doughnutData} />
            </div>
          </section>
        </div>
        <section className="notifications">
          <h2>Thông báo</h2>
          <ul>
            <li className="error">
              Tài liệu #11 không thành công: Gặp vấn đề
            </li>
            <li className="success">
              Tài liệu #10 đã được xử lý xong
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default UserHome;
