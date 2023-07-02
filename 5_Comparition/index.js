//Toán tử so sánh:
//- So sánh bằng:==,===
//- So sánh hơn: >, >=
//- So sánh bé : <, <=
//- So sánh khác: !=, !==
//- =>kết quả trã về của phép toán so sánh là boolean (true/false)

// So sánh Number (số)
console.log("5==5", 5 == 5); // true
console.log("3==8", 3 == 8); // false
console.log("'7' == 7", '7' == 7); //true
console.log("'9' === 9", '9' == 9);// false

console.log("3 != 3", 3 != 3);//false
console.log("'3' != 3", '3' != 3);//false
console.log("'3' !== 3", '3' !== 3);//true

console.log("5 > 7", 5 > 7);//false
console.log("'2' > 1","2" > 1);//true

//So sánh string (chuỗi)
console.log("'Annie' > 'Alice'", "Annie" > "Alice");// true
console.log("'Apple' > 'Banana'", "Apple" > "Banana");// false
console.log("'15' > '2'", "15" > "2"); //false do ss cặp 1 so 2

//Ép kiểu chuỗi

let a = "100"
let b = "100N"

console.log("chuyển chuỗi a thành số - cách 1:", +a);
console.log("chuyển chuỗi a thành số - cách 2:", parseInt (a));

console.log("cố tình ép kiểu một chuỗi không hợp lệ về số:", +b);

//Lưu ý: mọi giá trị lấy từ html đều là chuỗi, nếu muốn tính toán các giá trị là số ta cần ép kiểu giá trị về số
//lấy từ git dân về lam không kip