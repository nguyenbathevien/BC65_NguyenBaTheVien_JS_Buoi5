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
  var muc1 = 60e6;
  var muc2 = 120e6;
  var thueMuc1 = muc1 * 0.05;
  var thueMuc2 = (ThuNhap - muc1) * 0.1;
  var thue = 0;
  if (ThuNhap < muc1) {
    alert("Số Tiền Thu Nhập Không Hợp Lệ");
    thue = ThuNhap;
  } else if (ThuNhap >= muc1 && ThuNhap < muc2) {
    thue = thueMuc1 + 50e6 + SoNguoi * 50000;
  } else {
    thue = thueMuc1 + 100e6 + thueMuc2 + SoNguoi * 75000;
  }
  ThuNhap = ThuNhap - thue;
  if (ThuNhap < thue) {
    alert("Số Tiền Thu Nhập Không Hợp Lệ");
    thue = ThuNhap;
  }
  document.getElementById("result3").innerHTML =
    "Họ Tên: " +
    ten +
    ";" +
    `Tiền Thuế Thu Nhập Cá Nhân: ${format.format(ThuNhap)}`;
};

