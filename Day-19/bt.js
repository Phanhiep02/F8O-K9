// bài 1 fibonacci
// đệ quy
function fibonacci(n) {
  if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2); // điều kiện lặp lại code
    //   f4 = f3 + f2
    //   f3 = f2 + f1
    //   f2 = f1 + f0
    //  f0 = 0 , f1 = 1
  } else {
    return n;
  }
}
console.log("fibonacci của 6 là:");
console.log(fibonacci(6));
// bài 2: đảo ngược số
// hàm reverse
function reverse(n) {
  return n.reverse();
}
console.log("Đảo ngược số 1 , 2 ,3 , 4");
console.log(reverse([1, 2, 3, 4]));

// bài 3 số thành chữ
function numberToText(n) {
  var ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  var teens = [
    "mười",
    "mười một",
    "mười hai",
    "mười ba",
    "mười bốn",
    "mười lăm",
    "mười sáu",
    "mười bảy",
    "mười tám",
    "mười chín",
  ];
  var tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];

  if (n === 0) {
    return "không";
  }

  var result = "";

  var hundreds = Math.floor(n / 100);
  var tensUnits = n % 100; // chục , đvị

  if (hundreds > 0) {
    result += ones[hundreds] + " trăm ";
  }

  if (tensUnits >= 10 && tensUnits < 20) {
    result += teens[tensUnits - 10];
  } else {
    var tensDigit = Math.floor(tensUnits / 10); //  chục
    var onesDigit = tensUnits % 10; // đvị

    if (tensDigit > 0) {
      result += tens[tensDigit] + " ";
    }

    if (onesDigit > 0) {
      result += ones[onesDigit];
    }
  }

  return result.trim();
}

console.log("số 429");
console.log(numberToText(429));
console.log("số 53");

console.log(numberToText(53));
