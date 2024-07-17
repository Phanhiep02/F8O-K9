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
//Hàm để tạo đối tượng với cấu trúc name, age, address
function createCustomer(name, age, address) {
  return { name: name, age: age, address: address };
}
// Hàm để xử lý mảng đầu vào và tạo ra mảng kết quả
function createCustomers(customers) {
  var result = customers.map(function (customer) {
    // Tách họ và tên để tạo shortName
    var nameParts = customer.name.split(" ");
    var shortName = nameParts[0] + " " + nameParts[nameParts.length - 1];
    // Tạo đối tượng mới với shortName
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
// hàm tạo user
var createUser = function (name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
};
console.log(createUser("hiep", 123, "@gmail"));
var data = [];
var register = function (name, password, email) {
  // check xem có đầy đủ tt không
  if (!name || !password || !email) {
    console.log("Thông tin không đầy đủ");
    return;
  }
  // khởi tạo dữ liệu truyền vào
  var user = createUser(name, password, email);
  data.push(user);
  return data;
};
var login = function (email, password) {
  // kiểm tra thông tin hợp lệ ở trong data
  var checkUser = data.find(function (check) {
    return email === check.email && password === check.password;
  });
  if (checkUser) {
    return checkUser;
  } else {
    console.log("Thông tin không hợp lệ");
    return null;
  }
};
var dataRegister2 = register("Nguyen Van A", "1234567", "nguyenvana@email.com");
var dataRegister3 = register("Nguyen Van B", "123457", "nguyenvanb@email.com");

// Đăng nhập
var dataLogin = login("nguyenvanb@email.com", "123457");

console.log("Data:", data);
console.log("DataLogin:", dataLogin);
