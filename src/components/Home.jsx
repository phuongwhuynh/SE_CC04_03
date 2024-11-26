import React, { useContext, useState } from 'react';
import './Home.css';
import { GlobalContext } from "../context/index"
import home_icons from '../utils/icons';

const printData = [
    { id: "00001", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00002", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS2-P1", status: "Đang in" },
    { id: "00003", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Lỗi" },
    { id: "00004", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00005", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đang in" },
    { id: "00006", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
];

const DataCard = ({ value, label, change }) => (
    <div className="data-para">
        <img src={`${home_icons.others.circle_percent}`} alt="percentage" />
        <div className="row1">{value}</div>
        <div className="row2">{label}</div>
        <div className="row3">{change}</div>
    </div>
);

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
                    <th>Tên</th>
                    <th>Mail</th>
                    <th>Ngày</th>
                    <th>Máy in</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
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
                    <img className="pie-img" src={`${home_icons.others.pieLayer}`} alt="Pie chart" />
                    <img className="pro-img" src={`${home_icons.others.legends}`} alt="Legend" />
                </div>
            </div>
            <div className="line-chart">
                <div>Người dùng truy cập</div>
                <img src={`${home_icons.others.barLineChart2}`} alt="User access chart" />
            </div>
        </div>
        <div className="div4">
            <div className="info">
                <h2>Đơn in gần đây</h2>
                <a href="#" className="show-more">Show more...</a>
            </div>
            <PrintTable data={printData} />
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

const Home = () => {
    const { tab } = useContext(GlobalContext);
    return (
        <div style={{ display: 'flex', margin: 0, flexDirection: 'column' }}>
            {tab === 'home' && <HomeSection />}
            <Footer />
        </div>
    );
};

export default Home;
