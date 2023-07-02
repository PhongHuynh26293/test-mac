let colorRed = "red"
let colorBlue = "blue"

//cú pháp tạo mảng
let colors = ["red", "green", "blue"];
let animals = ["dog", "cat", "duck"];
let scores = [1, 3, 8, 4];
let emptyArr = [];

//Truy cập phần tử của mảng bằng chỉ mục (index)
//Lưu ý:chỉ mục bắt đầu từ 0
console.log("colors[1]:", colors[1]);//green
console.log("animals[0]", animals[0]);//dog
console.log("animals[10]", animals[10]);// undefined

//Thay đổi giá trị của phần tử trong mảng
colors[1] = "yellow"
console.log("colors[1] sau khi thay đổi:", colors[1]);

//Lấy ra độ dài mảng colors (số luong phần tử)
console.log("độ dài mảng colors:", colors.length);

//Dùng vòng lặp để duyệt mãng
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

//Các phương thức làm việc với mảng

// - array.push(value1, value2, ...): thêm 1 hoặc nhiều phần tử vào cuối mảng
colors.push("black", "orange")
console.log("mảng sau khi push:", colors);

// - array.pop(): xóa 1 phần tử ở cuối mảng và trả về chính phần tử đó
let lastColor = colors.pop();
console.log("mảng sau khi pop:", colors);
console.log("giá trị trả về:", lastColor);

// - array.unshift(value1, value2, ...) :Thêm 1 hoặc nhiều phần tử vào đầu mảng
colors.unshift("orange", "pink");
console.log("mảng colors sau khi unshift:", colors);

// - array.shift() :xóa 1 phần tử ở đầu mảng và trả về chính phần tử đó
let firsColor = colors.shift();
console.log("mảng sau khi shift:", colors);
console.log("giá trị trả về:", firsColor);

// - array.splice(startIndex, deleteCount, value1, value2, ...)
// animals = ["dog", "cat", "duck"];

animals.splice(2, 0, "tiger", "pig");
console.log("mảng animals sau khi thêm bằng splice:", animals);

let removedAnimals = animals.splice(3, 2);
console.log("mảng animals sau khi xóa bằng splice:", animals);
console.log("giá trị trả về:", removedAnimals);

// - array.slice(start, end):coppy ra 1 array mới từ vị trí start đến end (không bao gồm ở vị trí end nên ngay vị trí muốn end mình + thêm 1) không làm thay đổi mảng ban đầu
let newColors = colors.slice(1, 3)
console.log("mảng colors mới được slice:", newColors);


// - array.concat(array1, array2, ...):Dùng nối nhiều mảng, Tạo ra một mảng mới, bao gồm tấc cả phần tử của mảng ban đầu , và các mảng được truyền vào
let concatArray = colors.concat(newColors)
console.log("mảng colors sau khi concat:", concatArray);

// - array.indexOf(value): Trả về chỉ mục của phần tử đầu tiên nếu tìm thấy, ngược lại trả về -1 
// - array.lastIndexOf(value) : giống indexOf nhưng đếm ngược từ cuối mảng về

let indexCat = animals.indexOf("cat")
if(indexCat !== -1) {
    console.log("Có giá trị 'cat' trong mảng animals");
} else {
    console.log("không có gia trị 'cat' trong mảng animals");
}


// - array.includes(value): trả về true nếu tìm thấy, ngược lại trả về false
let hasDuck = animals.includes("duck");
if(hasDuck) {
    console.log("Có giá trị 'Duck' trong mảng animals");
} else {
    console.log("không có gia trị 'Duck' trong mảng animals");
    
}

// join: chuyển mảng thành chuỗi kèm kí tự phân cách
let date = [10, 5, 2023];
let str = date.join("/")
console.log("join:", str);

//split: chuyển chuỗi thành mảng dựa vào kí tự phân cách
let arr = str.split("/")
console.log("splist:", arr);

// - array.reverse(): Đảo ngược thứ tự các phần tử trong mảng
console.log("mảng colors trước khi reverse:", colors);
colors.reverse()
console.log("mảng colors sau khi reverse:", colors);

//Đảo ngược chuỗi bằng split ,join, reverse
let myStr = "Hello Cybersoft"
let strArr = myStr.split("");
strArr.reverse();
let reverseStr = strArr.join("");
console.log("chuỗi đảo ngược", reverseStr);

// - array.sort(): Sắp xếp mảng theo abcdef (chỉ đúng khi mảng là chữ)
console.log("mảng animals trước khi sort:", animals);
animals.sort()
console.log("mảng animals sau khi sort:", animals);

// mặc định hàm soft sẽ chuyển các giá trị trong mảng về chuỗi để so sánh
// đế sắp sếp số: ta sẽ viết một hàm so sánh,hàm này nhận vào 2 tham số a và b.
// để sắp sếp tăng dần ta return a - b, giảm dần ta return b-a.
// sau đó đưa hàm này vào làm đối số của hàm sort

let nums = [8, 2, 15, 6, 3, 22, 7, 9]
function compare(a, b) {
    return a - b
}

nums.sort(compare);
console.log("mảng sau khi sort:", nums);