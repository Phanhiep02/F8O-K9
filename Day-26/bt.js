// b 1
var result = function (...rest) {
  var total = 0;
  var isValid = true;
  for (var value of rest) {
    if (typeof value !== "number") {
      isValid = false;
      break;
    } else {
      total += value;
    }
  }
  if (!isValid) {
    return undefined;
  }
  return total;
};
console.log("bai 1: ", result(1, 2, "3", 4));
console.log("bai 1: ", result(1, 2, 3, 4));

// b2
Object.prototype.getCurrency = function (currency) {
  var number = +this;
  if (typeof number !== "number" || isNaN(number)) {
    return "Giá trị không hợp lệ!";
  }

  return number.toLocaleString("vi").replaceAll(".", ",") + " " + currency;
};
//Case 1
var price = 12000;
console.log("bài 2 :", price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price2 = "12000000";
console.log("bài 2 :", price2.getCurrency("đ")); //Hiển thị: 12,000,000 đ
// b3
function buildTree(arr, parentId = 0) {
  var result = []; // Khai báo một mảng mới để tạo cây nested
  for (var item of arr) {
    // Nếu như có parent, check với parentId để xác định cấp con
    if (item.parent === parentId) {
      // console.log(parentId);
      // Đệ quy để tạo cấp con
      var children = buildTree(arr, item.id);

      if (children.length > 0) {
        // Nếu như tạo được cấp con, đưa vào cấp cha dưới dạng nested
        item.children = children;
      }
      // Xóa key parent cho giống đề bài
      delete item.parent;
      // Truyền item đã tạo nested vào cây nested
      result.push(item);
    }
  }
  // Trả về cây nested đã được tạo xong
  return result;
}

// Dữ liệu mẫu
var flatCategories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

// Tạo cây nested
var nestedCategories = [{ children: buildTree(flatCategories) }];
console.log(JSON.stringify(nestedCategories, null, 2));

// b4
var arr1 = [1, 2, 3, 4, 5];
Array.prototype.reduce2 = function (callback, result) {
  var i = 0;

  if (arguments.length < 2) {
    result = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};
var sum = arr1.reduce2(function (prev, current) {
  return (prev += current);
}, 0);
// không truyền thì agm.leng = 1 , truyền thì agm.length = 2
console.log("bai 4 :", sum);
