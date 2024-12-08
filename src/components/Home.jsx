import React, { useContext, useState } from 'react';
import './Home.css';
import { GlobalContext } from "../context/index"
import home_icons from '../utils/icons';



const DataCard = ({ value, label, change }) => (
    <div className="data-para">
        <img src={`${home_icons.others.circle_percent}`} alt="percentage" />
        <div className="row1">{value}</div>
        <div className="row2">{label}</div>
        <div className="row3">{change}</div>
    </div>
);

const rowsPerPage = 5;
const PrintTable = () => {
  const {logList}=useContext(GlobalContext)
  const reversedLogList = [...logList].reverse(); 
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
                    {/* <th>ID</th> */}
                    <th>Tên</th>
                    <th>Số trang</th>
                    <th>ID sinh viên</th>
                    <th>Ngày</th>
                    <th>Máy in</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {reversedLogList.map((item) => (
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.filename}</td>
                            <td>{item.totalPages}</td>
                            <td>{item.userid}</td>
                            <td>{item.dateTime}</td>
                            <td>{item.printerName}</td>
                            <td> 
                                <span className={`status ${getStatusClass("Đã in")}`}>Đã in</span>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const HomeSection = () => (
  <div className="right-section">
    <div className="div1">
      <div className="name">Tổng kết ngày</div>
      <div className="date">21/10/2024</div>
      <div className="data">
        {[...Array(4)].map((_, i) => (
          <DataCard
            key={i}
            value="220.000 VND"
            label="Tổng tiền thu"
            change="-5% hôm qua"
          />
        ))}
      </div>
    </div>
    <div className="div2">
      <div className="bxh">
        <div className="user-name">Xếp hạng người dùng</div>
        <img src={`${home_icons.others.group_90}`} />
      </div>
      <div className="total-cost">
        <div className="cost">Doanh thu trong tuần</div>
        <img src={`${home_icons.others.barLineChart}`} />
      </div>
    </div>
    <div className="div3">
      <div className="pie-chart">
        <div>Tổng chi phí</div>
        <div className="pie-chart-img">
          <img
            className="pie-img"
            src={`${home_icons.others.pieLayer}`}
            alt="Pie chart"
          />
          <img
            className="pro-img"
            src={`${home_icons.others.legends}`}
            alt="Legend"
          />
        </div>
      </div>
      <div className="line-chart">
        <div>Người dùng truy cập</div>
        <img
          src={`${home_icons.others.barLineChart2}`}
          alt="User access chart"
        />
      </div>
    </div>
    <div className="div4">
      <div className="info">
        <h2>Đơn in gần đây</h2>
        <a href="#" className="show-more">
          Show more...
        </a>
      </div>
      <PrintTable />
    </div>
  </div>
)

const Footer = () => (
    <div className="right-footer">
        <div className="copyright">
            <strong>Copyright © 2024</strong>{' '}
            <span className="underline">Academic Affairs Office.</span> All rights reserved.
        </div>
        <div className="version">Version 2.4.0</div>
    </div>
);

const Home = () => {
    const { tab } = useContext(GlobalContext);
    return (
      <div
        style={{ display: "flex", margin: 0, flexDirection: "column" }}
        className="h-[80vh] overflow-y-scroll"
        id="style-15"
      >
        {tab === "home" && <HomeSection />}
        <Footer />
      </div>
    )
};

export default Home;
