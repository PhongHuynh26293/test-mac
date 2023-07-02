// Truy cập
let msg = localStorage.getItem("msg")
console.log("msg:", msg);

// Thêm / Cập nhật
localStorage.setItem("username", "phonghuynh")

// Xoá
localStorage.removeItem("msg")

// 
let user = { id : 1, name: "alice" };
localStorage.setItem("user", user);

