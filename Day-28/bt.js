// bai 1 push2
// thêm phần tử vào cuối mảng
Array.prototype.push2 = function (callback) {
  return (this[this.length] = callback);
};
var a = [1, 2, 3, 4];
a.push2("1");
console.log(a);

// bai 2 filter2
// filter trả về 1 mảng và các giá trj true

var numbers = [1, 2, 3, 4, 5, 6];

Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
var result = numbers.filter2(function (number) {
  return number % 2 === 0;
});
console.log(result);
// bai 3
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function createOptions(categories, prefix) {
  if (prefix === undefined) {
    prefix = "";
  }
  return categories.reduce(function (options, category) {
    options +=
      '<option value="' +
      category.id +
      '">' +
      prefix +
      category.name +
      "</option>\n";
    if (category.children) {
      options += createOptions(category.children, prefix + "--|");
    }
    return options;
  }, "");
}

var htmlOpt = createOptions(categories);
document.querySelector("select").innerHTML = htmlOpt;
