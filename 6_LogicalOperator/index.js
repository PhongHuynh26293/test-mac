//Toán tử Logic:
// - Phủ định: ! _ Nghịch đảo giá trị boolean
// - và: && - Trả về True nếu tấc cả đều true
// - hoặc :|| - Trả về true nếu có ít nhất 1 true

console.log("!true", !true); // false

let a = 5
let b = 8
let c = 11
console.log((a < b) && (b < c));// True

console.log((b < a) && (b < c));// false

console.log((b < a) || (b < c));// true

// Truthy value va falsy value
// falsy value: false, "", 0, null, undefined, NaN
// Truthy value: những giá trị còn lại 

// Toán tử || tìm giá trị truthy value đầu tiên
// let result = value1 || value2 || value3

let = fullName = ""
let = nickName = "Bob"

let user = fullName || nickName || "Anonymous"
console.log("user:", user);

//Toán tử && tìm giá trị falsy value dầu tiên
// let result = value1 && value2 && value3
let isLoggedIn = true;
let message = isLoggedIn && "welcome!!!";
console.log("message:", message);

// Toán tử ! ép kiểu dữ liệu về bolean
console.log("!!0", !!0);
console.log("!!'Hello'", !!"Hello");