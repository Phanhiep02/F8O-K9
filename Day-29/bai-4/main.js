var formEl = document.querySelector(".form__task");
var formInputEl = formEl.querySelector(".form__input");
var btnAddTask = formEl.querySelector(".form__inner-add");
var btnDeleteTask = document.querySelector(".form__content-delete");
var btnEditTask = document.querySelector(".form__content-edit");
var contentEl = document.querySelector(".content");
var contentFormEl = document.querySelector(".form__content");
var descEl = document.querySelector(".form__content-desc");
// lấy dữ liệu
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  var formValue = formInputEl.value;

  if (formValue !== "") {
    contentEl.innerHTML += `
  <div class="form__content">
         <p class="form__content-desc">${formValue}</p>
            <form action="" class="form__task-edit">
            <div class="form__edit">
              <input type="text" class="form__input-edit" value="${formValue}" />
              <button class="form__inner-add-edit">Add Task</button>
            </div>
          </form>
         <div class="form__content-right">
           <i class="fa-solid fa-pen-to-square form__content-edit"></i>
           <i class="fa-solid fa-trash form__content-delete"></i>
         </div>
       </div>

`;
    formInputEl.value = "";
  } else {
    return;
  }

  contentEl.style.display = "block";
});

// xử lí khi xóa
// btnDeleteTask.addEventListener("click", function (e) {
//   contentFormEl.style.display = "none";
// });

contentEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("form__content-delete")) {
    e.target.closest(".form__content").remove();
  }
  if (e.target.classList.contains("form__content-desc")) {
    e.target.classList.toggle("text");
  }
  if (e.target.classList.contains("form__content-edit")) {
    var formTaskEdit = e.target
      .closest(".form__content")
      .querySelector(".form__task-edit");
    formTaskEdit.style.display = "block";
  }
});

// Xử lý khi form chỉnh sửa được submit
contentEl.addEventListener("submit", function (e) {
  if (e.target.classList.contains("form__task-edit")) {
    e.preventDefault();
    var formTaskEdit = e.target;
    console.log(formTaskEdit);
    var newTaskValue = formTaskEdit.querySelector(".form__input-edit").value;
    var descEl = formTaskEdit
      .closest(".form__content")
      .querySelector(".form__content-desc");

    descEl.textContent = newTaskValue;
    formTaskEdit.style.display = "none";
  }
});
