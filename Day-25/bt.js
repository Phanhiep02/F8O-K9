// bai 1
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var parts = field.split(".");
  var group = parts[0];
  var specificError = parts[1];

  var errorGroup = errors[group];
  if (!errorGroup) {
    return " ";
  }

  if (specificError) {
    return errorGroup[specificError] || " ";
  }

  if (errorGroup.required) {
    return errorGroup.required;
  }

  for (var key in errorGroup) {
    if (errorGroup.hasOwnProperty(key)) {
      return errorGroup[key];
    }
  }

  return " ";
}

console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique"));

//bai 2
var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var result = createCustomers(customers);
// Hàm  customer
function createCustomer(name, age, address) {
  return { name: name, age: age, address: address };
}

function createCustomers(customers) {
  var result = customers.map(function (customer) {
    var nameParts = customer.name.split(" ");
    var shortName = nameParts[0] + " " + nameParts[nameParts.length - 1];
    return {
      name: customer.name,
      age: customer.age,
      address: customer.address,
      shortName: shortName,
    };
  });

  result.sort(function (a, b) {
    return a.age - b.age;
  });

  return result;
}

console.log(result);
