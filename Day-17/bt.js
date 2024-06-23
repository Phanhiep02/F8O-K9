/*
 1. Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

2. tính tiền điện
0-50 =   1.678
51- 100 =  1.734
101- 200 =  2.014
201 - 300 = 2.563
301 - 400 = 2.834
401 tro len = 2.927


4. Vẽ tam giác số
Vẽ tam giác số sau với N dòng

1

2 3

4 5 6

7 8 9 10

11 12 13 14 15

5. vẽ bàn cờ vua
6. viết bảng cửu trương
*/
// 3. S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
var n = 3;
var total;
var sum = 0;
for (var i = 1; i <= n; i++) {
  total = i * (i + 1);
  sum = sum + total;
}
console.log("bài 3 3 sum = ", sum);
// 1. Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
var km = 9;
var km1 = 15000;
var kmCen = 13500;
var km5 = 11000;
var taxi;
if (km > 0) {
  if (km <= 1) {
    taxi = km * km1;
  } else if (km > 1 && km <= 5) {
    taxi = km * kmCen + km1 - kmCen;
  } else if (km > 5 && km <= 120) {
    taxi = km * km5 + km1 + 4 * kmCen - 5 * km5;
  } else {
    taxi = km * km5 + km1 + 4 * kmCen - 5 * km5 * 0.9;
  }
}
console.log(` bài 1 :Tiền taxi của bạn là : ${taxi}đ`);

// 2. tính tiền điện
// 0-50 =   1.678
// 51- 100 =  1.734
// 101- 200 =  2.014
// 201 - 300 = 2.563
// 301 - 400 = 2.834
// 401 tro len = 2.927
var step = 108;
var bill;
var step1 = 1.678;
var step2 = 1.734;
var step3 = 2.014;
var step4 = 2.563;
var step5 = 2.834;
var step6 = 2.927;
if (step > 0) {
  if (step <= 50) {
    bill = step * step1;
  } else if (step >= 51 && step <= 100) {
    bill = step * step2 - 50 * step1;
  } else if (step >= 101 && step <= 200) {
    bill = step * step3 - 50 * step1 - 50 * step2;
  } else if (step >= 201 && step <= 300) {
    bill = step * step4 - 50 * step1 - 50 * step2 - 100 * step3;
  } else if (step >= 301 && step <= 400) {
    bill = step * step5 - 50 * step1 - 50 * step2 - 100 * step3 - 100 * step4;
  } else {
    bill =
      step * step6 -
      50 * step1 -
      50 * step2 -
      100 * step3 -
      100 * step4 -
      100 * step5;
  }
}
console.log(`Bài 2 : Tiền điện của bạn là : ${bill} đồng`);
