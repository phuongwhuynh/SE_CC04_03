let icons = ['noclick-house.svg', 'noclick-chart-column.svg', 'noclick-shopping-cart.svg', 'noclick-chart-line.svg', 'noclick-settings.svg', 'noclick-user-cog.svg']

const data = [
    { id: "00001", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00002", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS2-P1", status: "Đang in" },
    { id: "00003", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Lỗi" },
    { id: "00004", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
    { id: "00005", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đang in" },
    { id: "00006", name: "Nguyễn Văn A", email: "anh.huynhanh@hcmut.edu.vn", date: "2024/11/10 15:11:35", printer: "CS1-P12", status: "Đã in" },
];




document.querySelectorAll('.js-button').forEach(button => {
    if (button.classList.contains("b1")) {
        button.addEventListener('click', () => {
            document.querySelector('.display').innerHTML = "button 1";
        }
        )
    }
    else {
        button.addEventListener('click', () => {
            document.querySelector('.display').innerHTML = "button 2"
        })
    }
})

function render(names, icons) {
    let html = '';
    names.forEach((name, index) => {
        let icon = icons[index]
        console.log(name);
        html += `
        <div class="left-sidebar-div">
            <button class="button-1">
                <img src="icons/${icon}">
                <p>${name}</p>
            </button>
            <button class="button-2">
                <img src="icons/noclick-back.png">
            </button>
        </div>
        `;
    }
    )
    document.querySelector('.left-section-js').innerHTML = html;
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
renderData(['test', 'test', 'test', 'test'])
render(['Trang chủ', 'Bảng xếp hạng', 'In order', 'Báo cáo sales', 'Cài đặt máy in', 'Quản lý người dùng'], icons);


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

document.addEventListener("DOMContentLoaded", loadTableData);