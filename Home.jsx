import React, { useContext, useState } from 'react';
import './Home.css';
import { GlobalContext } from "../context/index"
import home_icons from '../utils/icons';





const HomeSection = () => (
    <div className="right-section">
        <div className="div3">
            
            <div className="line-chart">
                <div>Hoạt động trong tuần</div>
                 
                <img src={'src/assets/ThongKeSuDung.jpg'} 
                     alt="Hình ảnh" 
                     style={{ width: '80%', height: 'auto' }}
                />
            </div>
            <div className="pie-chart1">
            <img src={'src/assets/HomeRight.jpg'} 
                     alt="Hình ảnh" 
                     style={{ width: '80%', height: 'auto' }}
                />
            </div>
        </div>


        <div className="div3">
            
            <div className="line-chart">
                <div>Hoạt động trong tuần</div>
                 
                <img src={'src/assets/HDtrongtuan.jpg'} 
                     alt="Hình ảnh" 
                     style={{ width: '80%', height: 'auto' }}
                />
            </div>
            <div className="pie-chart2">
                <div>Tổng chi tiêu</div>
                <div className="pie-chart-img">
                <img src={'src/assets/TongChiTieu.jpg'} 
                     alt="Hình ảnh" 
                     style={{ width: '100%', height: '90%' }}
                />
                </div>
            </div>
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
