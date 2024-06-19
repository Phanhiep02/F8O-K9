// bai 1 hoán vị 2 số
var a = 10;
var b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log("Bài 1 :", a, b);

// bài 2 thực hiện phép toán
var S = 10 + 20 + 5 ** 10 / 2;
console.log("Bài 2 :", S);

// bài 3 tìm số lớn nhất
var maxA = 50;
var maxB = 60;
var maxC = 30;
var max;
if (maxA > maxB && maxA > maxC) {
  max = maxA;
} else if (maxB > maxA && maxB > maxC) {
  max = maxB;
} else {
  max = maxC;
}
console.log("Bài 3 : ", max);

// bai 4 kiểm tra số cùng dấu
var same1 = 10;
var same2 = -10;
if (same1 * same2 >= 0) {
  console.log("bài 4: hai số cùng dấu");
} else {
  console.log("bài 4 : hai số khác dấu");
}

// bài 5 sắp xếp 3 số theo thứ tự tăng dần

var sx1 = 1;
var sx2 = 4;
var sx3 = 3;

var sx;
// nếu sắp xếp 1 > sx2 sẽ hoán vị chúng
if (sx1 > sx2) {
  sx = sx1;
  sx1 = sx2;
  sx2 = sx;
}

if (sx1 > sx3) {
  sx = sx1;
  sx1 = sx3;
  sx3 = sx;
}
if (sx2 > sx3) {
  sx = sx2;
  sx2 = sx3;
  sx3 = sx;
}
console.log("bài 5 :", sx1, sx2, sx3);
