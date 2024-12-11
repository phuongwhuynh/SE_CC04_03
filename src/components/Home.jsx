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
    <div className="div1 flex">
      
      <div className="data">
      <div>
        <div className="text-4xl font-bold py-2">Tổng kết ngày</div>
        <div className="text-2xl font-bold py-2">21/10/2024</div>
      </div>
        {[
          {
            value: "220.000 VND",
            lable: "Tổng tiền thu",
            change: "-5% hôm qua",
          },
          { value: "30", lable: "Yêu cầu in đã xử lý", change: "+5% hôm qua" },
          { value: "200", lable: "Trang giấy bán ra", change: "-10% hôm qua" },
          {
            value: "12",
            lable: "Sinh viên đăng nhập lần đầu",
            change: "-10% hôm qua",
          },
        ].map((item, i) => (
          <DataCard
            key={i}
            value={item.value}
            label={item.lable}
            change={item.change}
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
