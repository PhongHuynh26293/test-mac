//truy cập DOM bằng javascript thông qua đối tượng document

// truy cập thẻ body
console.log(document.body);
//thêm style cho thẻ body
document.body.style.backgroundColor = "green";
document.body.style.color = "red";

//truy cập một thẻ bát kì bằng id
let titleEl = document.getElementById("title");
console.log("titleEl:", titleEl);
console.log("Nội dung thẻ titleEl:", titleEl.innerHTML);
//thay đổi nội dung cua tag
titleEl.innerHTML = "Hello DOM";

//nếu truy cập một thẻ bằng id không tồn tại thì sẽ trả giá trị null
const testEl = document.getElementById("text");
console.log("testEl:", testEl);
//null không có các thuộc tính innerHTML hay style như 1 tag bình thường nên chương trình sẽ bị lỗi
//testEl.innerHTML = "Test"

//Truy cập tag input bằng id
let inputBrandEl = document.getElementById("brand");
//lấy ra giá trị của thẻ input khi thẻ k co dấu đóng
console.log("giá trị thẻ input:", inputBrandEl.value);
//thay đổi giá trị của tag input
inputBrandEl.value = "cybersoft academy";

//thay đổi style cua tg
let p1El = document.getElementById("content-1");
//cách 1
p1El.style.color = "red";
p1El.style.backgroundColor = "blue";
//cách 2
p1El.style = "font-size: 16px; color: red; background-color: blue";

//thay đổi class cua tag
let p2El = document.getElementById("content-2");
//thêm class
p2El.classList.add("title", "active");
//xoa class
p2El.classList.remove("title");
//toggle class: Nếu tag đã có class thì xoa đi nếu chưa có class đó thì thêm vào
p2El.classList.toggle("text");

// ** Hàm (sẽ được học kỹ hơn ở buổi 5)

//những đoạn mã bên trong hàm mặc định sẽ không được thực thi
function showMessage() {
  // let username = "yasuo"
  // alert(`Hello ${username}`)
}
//khi cần chạy ta thực hiện gọi hàm để thực thi những đoạn mã bên trong hàm
showMessage();

//Bai tap 1

function baitap1() {
  document.getElementById("content-3").innerHTML = "Đã thay đổi rồi nhé";
}

//bai tap 2

function toggleHide() {
  document.getElementById("content-4").classList.toggle("hide");
}

//bài tập 3
function turnOn() {
  document.getElementById("img-1").src = "./img/pic_bulbon.gif";
}

function turnOff() {
  document.getElementById("img-1").src = "./img/pic_bulboff.gif";
}

//bài tập 4
function disableInputAndButton() {
  document.getElementById("input-1").disabled = true;
  document.getElementById("button-1").disabled = true;
}

//bài tập 5

function login() {
  //lấy giá trị cua 2 input tài khoản va mật khẩu
  let username = document.getElementById("input-username").value;
  let password = document.getElementById("input-password").value;

  let outputEl = document.getElementById("output-1");
  outputEl.innerHTML = `${username} - ${password}`;
  outputEl.classList.remove("hide");
  outputEl.style.backgroundColor = "blue";
  outputEl.style.color = "red";
}

// Tạo động và thêm phần tử vào html bằng javascript

// Cú pháp tạo mới một phần tử html
let h1El = document.createElement("h1");
h1El.innerHTML = "Cybersoft";
// Đưa thẻ h1 vào trong body
document.body.appendChild(h1El);

let pEl = document.createElement("p");
pEl.innerHTML = "Javascript";
let containerEl = document.getElementById("container");
containerEl.appendChild(pEl);

// Bài tập 6:
function addProduct() {
  // B1: Lấy giá trị của 2 input tên sản phẩm và giá
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  // B2: Hiển thị ra giao diện
  let tbody = document.getElementById("product-list");

  // Tạo thẻ tr và đưa vào trong thẻ tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  // Tạo thẻ td chứa thông tin tên sản phẩm và đưa vào trong thẻ tr
  let tdName = document.createElement("td");
  tdName.innerHTML = productName;
  tr.appendChild(tdName);

  // Tạo thẻ td chứa thông tin giá sản phẩm và đưa vào trong thẻ tr
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = productPrice;
  tr.appendChild(tdPrice);
}

// Cách 2
function addProduct2() {
  // lấy giá trị của 2 input tên sản phẩm và gid
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  //b2: hiển thị ra giao diện
  let tbody = document.getElementById("product-list");

  let html = `
    <tr>
      <td>${productName}</td>
      <td>${productPrice}</td>
    </tr>
  `
  tbody.innerHTML += html;
}
