// Number
let age = 25;
console.log("age:", age);
let number = 12.5;
console.log("number:", number);
let total = 1_000_000;
console.log("total:", total);

// Sử dụng toán tử: +, -, *, / (%chia lấy phần dư)

let a = 8
let b = 13

let c = a + b
console.log("c:", c);

let d = b - a;
console.log("d:", d);

let e = a * b;
console.log("e:", e);

let f = b / a;
console.log("f:", f);

let g = b % a;
console.log("g:", g);

// Toán tử ++, --
//a đang bằng 8 và trong trường hợp này h=8 và a sẻ bằng 9(do a gắn cho h trước x mới + cho bản thân nó)
let h = a++;
console.log("h:", h);

// a đang bằng 9 trường hợp này i bằng 10 và a củng bằng 10 (do a+ trước xong gán cho i)
let i = ++a;
console.log("i:", i);

// Toán tử gán: =, +=, -=, *=, /=, %=

a = a + 3
console.log("a:",a);
b += 3 // tương đương với b = b + 3
b *= 2 // tương đương với b = b * 2

//bài tập 1:Tính cạnh huyền khi biết 2 cạnh góc vuông
let AB = 3
let AC = 4

let BC =Math.sqrt( Math.pow(3, 2)+Math.pow(4, 2))
console.log("BC:", BC);


Math.pow(3, 2) //tính 3 mũ 2
Math.sqrt(25)  //Tính căn bậc 2 của 25
Math.floor(1.5) //làm tròn xuống 1
Math.ceil(1.3) //làm tròn lên 2
Math.round(2.3) // làm tròn tới số nguyên gần nhất xuống 2 lấy 0.5 làm chuẩn
 
// bài tập 2 nhập vao n nguyen dương với 3 ký số,tính tổng 3 ký số đó:vd n= 123 => 1+ 2+ 3=6

let n = 429
let sum = 0

sum += n % 10 //total = 9
n = Math.floor(n / 10) // n = 42

sum += n % 10 // sum = 9+2
n = Math.floor(n / 10) //n =4

sum += n // sum = 11 +4
console.log("sum:", sum)

//String (chuỗi)
let message = "Hello BC52"
let username = 'alice' //có thể dung nháy đơn hoặc đôi tùy

let firstName = "phong"
let lastName = "huynh"
// nối chuỗi bằng toán tử + " " + lastName;
let fullName = firstName +" "+ lastName;
console.log("fullName:", fullName);

//Chuỗi sử dụng dấu backtick `` có thể xuống hàng
let abc = `Cao thắng,q3,hcm`;
let content = `
abcc
dknc
lksdnf
`
console.log("content :", content);

let street = "cao thang"
let district = "quan 3"
let city = "ho chi minh"
//let address = street = ", " + district + ", " + city;
let address = `${street}, ${district}, ${city}`
console.log("address:", address);

//null nhằm tạo một biến với giá trị đại diện cho rỗng,hoặc giá trị chưa biết
let birthday = null;
console.log("birthday :", birthday);
birthday = "xx/xx/xx"

// undefined: mang ý nghĩa biến chưa được gán giá trị
//khởi tạo biến không gán giá trị thì mặc định là undefined
let product;
console.log("product:", product);
//Hoặc có thể khởi tạo biến mang giá trị undefined
let data = undefined;

//boolean: kiểu dữ liệu luận lý, chỉ mang 2 giá trị true hoặc false
// true: mang ý nghĩa đúng
// false: mang nghĩa là sai
// cách đặt tên các biến boolean: thường có chữ is ...,has ..., should...
let isActive = true;

// từ khóa "typeof" : Dùng để kiểm tra kiểu dữ liệu của 1 biến
console.log("typeof isActive:", typeof isActive);
console.log("typeof product:", typeof ptoduct);
console.log("typeof address:", typeof address);

