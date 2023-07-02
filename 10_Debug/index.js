let titleEl = document.getElementById("title");

// Cannot set properties of null (setting 'innerHTML')
// titleEl.innerHTML = "Hello";

//đi kiểm tra bên html xem có không hoặc có gọi sai chính tả hay không

// sử dụng if để kiểm tra nếu có thì chạy không có thì bỏ qua không lỗi nửa
if (titleEl) { 
  titleEl.innerHTML = "Hello";
}

// data is not defined
// console.log(data)

// Kiểm tra giá trị của các biến, hàm bằng console.log()
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

// Debug bằng breakpoint/debugger
function greeting(name) {
  // debugger;
  let text = `Hello ${name}`;
  say(text);
}

function say(text) {
  document.write("**" + text + "**");
}

greeting("Bob");