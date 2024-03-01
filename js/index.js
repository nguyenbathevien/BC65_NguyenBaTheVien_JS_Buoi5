// Bai 1
document.getElementById("handleTinh").onclick = function () {
  var diemchuan = +document.getElementById("diemchuan").value;
  var diem1 = +document.getElementById("diem1").value;
  var diem2 = +document.getElementById("diem2").value;
  var diem3 = +document.getElementById("diem3").value;
  var result;
  var khuVuc = document.getElementById("khuvuc").value;
  var doiTuong = document.getElementById("doituong").value;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;

  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
  }
  switch (doiTuong) {
    case "1":
      diemDoiTuong = 2.5;
      break;
    case "2":
      diemDoiTuong = 1.5;
      break;
    case "3":
      diemDoiTuong = 1;
      break;
    default:
      diemDoiTuong = 0;
  }
  var TongDiem = diem1 + diem2 + diem3 + diemDoiTuong + diemKhuVuc;
  if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    result = "Bạn đã Rớt";
  } else if (TongDiem >= diemchuan) {
    result = "Bạn đã đậu";
  } else {
    result = "Bạn đã Rớt";
  }
  document.getElementById("result1").innerHTML =
    result + `,Tổng Điểm =    ${TongDiem}`;
};

// BAi 2
function tinhThue50KWdau(KW) {
  return KW * 500;
}
function tinhThue50KWke(KW) {
  return KW * 500 + (KW - 50) * 150;
}
function tinhThue100KWke(KW) {
  return 66000 + (KW - 110) * 850;
}
function tinhThuetren200KW(KW) {
  return 142500 + (KW - 200) * 1100;
}
var format = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
document.getElementById("handleTinhThue").onclick = function () {
  var KW = +document.getElementById("KW").value;
  var tongtien = 0;

  var Hoten = document.getElementById("Hoten").value;
  if (KW <= 50) {
    tongtien = tinhThue50KWdau(KW);
  } else if (KW > 50 && KW <= 100) {
    tongtien = tinhThue50KWke(KW);
  } else if (KW > 100 && KW <= 200) {
    tongtien = tinhThue100KWke(KW);
  } else {
    tongtien = tinhThuetren200KW(KW);
  }
  document.getElementById("result2").innerHTML =
    "Họ Tên: " + Hoten + `, Tổng Tiền = ${format.format(tongtien)}`;
};
// Bài 3
document.getElementById("handleTinhThuNhap").onclick = function () {
  var ThuNhap = +document.getElementById("ThuNhap").value;
  var SoNguoi = +document.getElementById("SoNguoi").value;
  var ten = document.getElementById("ten").value;

  var thueMuc1 = 0.05;
  var thueMuc2 = 0.1;
  var thueMuc3 = 0.15;
  var thueMuc4 = 0.2;
  var thueMuc5 = 0.25;
  var thueMuc6 = 0.3;
  var thueMuc7 = 0.35;
  var thue = 0;
  if (ThuNhap < 60e6) {
    alert("Số Tiền Thu Nhập Không Hợp Lệ");
    thue = ThuNhap;
  } else if (ThuNhap == 60e6) {
    thue = ThuNhap * thueMuc1;
  } else if (ThuNhap > 60e6 && ThuNhap <= 120e6) {
    thu = ThuNhap * thueMuc2;
  } else if (ThuNhap > 120e6 && ThuNhap <= 210e6) {
    thue = ThuNhap * thueMuc3;
  } else if (ThuNhap > 210e6 && ThuNhap <= 384e6) {
    thue = ThuNhap * thueMuc4;
  } else if (ThuNhap > 384e6 && ThuNhap <= 624e6) {
    thue = ThuNhap * thueMuc5;
  } else if (ThuNhap > 624e6 && ThuNhap <= 960e6) {
    thue = ThuNhap * thueMuc6;
  } else {
    thue = ThuNhap * thueMuc7;
  }
  var thunhapThue;
  thunhapThue = ThuNhap - 4e6 + thue - SoNguoi * 1.6e6;
  if (ThuNhap < thue) {
    alert("Số Tiền Thu Nhập Không Hợp Lệ");
    thunhapThue = 0;
  }
  document.getElementById("result3").innerHTML =
    "Họ Tên: " +
    ten +
    ";" +
    `Tiền Thuế Thu Nhập Cá Nhân: ${format.format(thunhapThue)}`;
};
// Bài 4
function Myfunction() {
  var x = document.getElementById("DoiTuong").value;
  if (x == "Nhà Dân")
    document.getElementById("SoKetNoi").style.display = "none";
  else document.getElementById("SoKetNoi").style.display = "inline-block";
}
var phihoadon;
var phidichvu;
var thueKenh;

function TinhThueNhaDan() {
  phidichvu = 20.5;
  phihoadon = 4.5;
  thueKenh = 7.5;
  var sokenh = +document.getElementById("SoKenh").value;
  return phidichvu + phihoadon + thueKenh * sokenh;
}
function TinhThueDoanhNghiep() {
  phihoadon = 15;
  thueKenh = 50;
  var SoKetNoi = +document.getElementById("SoKetNoi").value;
  var sokenh = +document.getElementById("SoKenh").value;
  if (SoKetNoi <= 10) {
    phidichvu = 75;
  } else {
    phidichvu = 75 + (SoKetNoi - 10) * 5;
  }
  return phidichvu + phihoadon + thueKenh * sokenh;
}
document.getElementById("handleTinhTienCap").onclick = function () {
  var Tiencap;
  var DoiTuong = document.getElementById("DoiTuong").value;
  var MaKH = document.getElementById("MaKH").value;
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  switch (DoiTuong) {
    case "Nhà Dân":
      Tiencap = TinhThueNhaDan();
      break;
    default:
      Tiencap = TinhThueDoanhNghiep();
  }
  if (DoiTuong != "Nhà Dân" && DoiTuong != "Doanh Nghiệp") {
    alert("Hãy chọn đối tượng");
    Tiencap = 0;
  }
  document.getElementById("result4").innerHTML =
    "Mã Khách Hàng : " + MaKH + ";" + `Tiền Cáp = ${formatter.format(Tiencap)}`;
};
