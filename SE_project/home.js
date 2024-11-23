let icons = ['noclick-house.svg', 'noclick-shopping-cart.svg', 'noclick-chart-line.svg', 'noclick-settings.svg', 'noclick-user-cog.svg']
let icons_click = ['whenclick-house.svg', 'whenclick-shopping-cart.svg', 'whenclick-chart-line.svg', 'whenclick-settings.svg', 'whenclick-user-cog.svg']

const data = [
    { id: "00001", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00002", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS2-P1", status: "Đang in" },
    { id: "00003", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Lỗi" },
    { id: "00004", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00005", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đang in" },
    { id: "00006", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
];




function render(names, icons, icons_click) {
    let html = '';
    names.forEach((name, index) => {
        let icon = icons[index]
        let icon_click = icons_click[index]
        console.log(name);
        html += `
        <div class="left-sidebar-div">
            <button class="button-1" >
                <img src="icons/${icon}" data-default-icon="${icon}" data-active-icon="${icon_click}">
                <p>${name}</p>
            </button>
            <button class="button-2">
                <img src="icons/noclick-back.svg">
            </button>
        </div>
        `;
    }
    )
    document.querySelector('.left-section-js').innerHTML = html;
    // change color
    document.querySelectorAll('.left-sidebar-div').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.left-sidebar-div').forEach(btn => {
                btn.classList.remove('left-sidebar-div-active');
                btn.querySelector('p').classList.remove('text-active');
                const img = btn.querySelector('.button-1 img');
                const defaultIcon = img.getAttribute('data-default-icon'); // Store the default icon
                img.src = `icons/${defaultIcon}`;

                const img2 = btn.querySelector('.button-2 img');
                img2.src = `icons/noclick-back.svg`;
            });
            this.classList.add('left-sidebar-div-active');
            this.querySelector('p').classList.add('text-active');

            const img1 = this.querySelector('.button-1 img');
            const activeIcon1 = img1.getAttribute('data-active-icon');
            img1.src = `icons/${activeIcon1}`;

            const img2 = this.querySelector('.button-2 img');
            img2.src = `icons/whenclick-back.svg`;

            const clickedName = this.querySelector('.button-1 p').textContent.trim();
            console.log(clickedName);
            if (clickedName === "Trang chủ") {
                renderRightSection(); // Chỉ render khi là nút Trang chủ
            } else {
                document.querySelector('.right-section-js').innerHTML = ''; // Xóa nội dung nếu không phải Trang chủ
            }
        });
    });
}

function renderData(names) {
    let html = '';
    names.forEach((name) => {
        console.log(name);
        html += `<div class="data-para">
        <img src="icons/circle-percent.svg">
        <div class="row1">220.000 VND</div>
        <div class="row2">Tổng tiền thu</div>
        <div class="row3">-5% hôm qua</div>
        </div>
        `;
    }
    )
    document.querySelector('.data-js').innerHTML = html;
}



function loadTableData() {
    const tableBody = document.getElementById("table-body");
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>${item.printer}</td>
      <td><span class="status ${getStatusClass(item.status)}">${item.status}</span></td>
    `;
        tableBody.appendChild(row);
    });
}

function getStatusClass(status) {
    if (status === "Đã in") return "printed";
    if (status === "Đang in") return "in-progress";
    if (status === "Lỗi") return "error";
    return "";
}


function renderRightSection() {
    let html = '';
    html += `<div class="div1">
                <div class="name">Tổng kết ngày</div>
                <div class="date">21/10/2024</div>
                <div class="data data-js">
                </div>
            </div>
            <div class="div2">
                <div class="bxh">
                    <div class="user-name">Xếp hạng người dùng</div>
                    <img src="icons/Group 90.svg">
                </div>
                <div class="total-cost">
                    <div class="cost">Doanh thu trong tuần</div>
                    <img src="icons/BarLineChart.svg">
                </div>
            </div>
            <div class="div3">
                <div class="pie-chart">
                    <div>Tổng chi phí</div>
                    <div class="pie-chart-img">
                        <img class="pie-img" src="icons/PieLayer.svg">
                        <img class="pro-img" src="icons/Legends.svg">
                    </div>
                </div>
                <div class="line-chart">
                    <div>Người dùng truy cập</div>
                    <img src="icons/BarLineChart-2.svg">
                </div>
            </div>
            <div class="div4">
                <div class="info">
                    <h2>Đơn in gần đây</h2>
                    <a href="#" class="show-more">Show more...</a>
                </div>
                <table>
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
                    <tbody id="table-body">
                    </tbody>
                </table>

            </div>
        `;
    document.querySelector('.right-section-js').innerHTML = html;
    renderData(['test', 'test', 'test', 'test'])
    loadTableData();
}
renderRightSection();
renderData(['test', 'test', 'test', 'test'])
render(['Trang chủ', 'In order', 'Báo cáo sales', 'Cài đặt máy in', 'Quản lý người dùng'], icons, icons_click);
loadTableData();
