//Khai báo object (đối tuọng)
let car = {
    //khai báo thuộc tính (property) cho object
    //key: value
    brand: "Toyota",
    color: "silver",
    weight: 1000,
};

//Truy cập các thuộc tính của object bằng toán tử.
console.log("brand:", car.brand);

//Truy cập các thuộc tính của object bằng object["property"]
console.log("color:", car["color"]);

//Truy cập các thuộc tính của các object bằng giá trị cuả một biến
let key = "weight"
console.log(car[key]);

//Thay đổi giá trị của thuộc tính
car.color = "red";
console.log("thuộc tính color sau khi thay đổi:", car);

// Thêm thuộc tính mới
car.price = 500000
console.log("Object car sau khi thêm thuộc tính price", car);

//Xóa thuộc tính
delete car.weight
console.log("Car sau khi xóa thuộc tính weight:",car);

//Kiểm tra một thuộc tính có tồn tại trong object hay không

//khi truy cập một thuộc tính không tồn tại,trả ra undefined
if (car.power) {
    console.log("thuộc tính power có tồn tại");
}
//Hoặc sd từ khóa In để kiểm tra
if ("price" in car) {
    console.log("Thuộc tính price có tồn tại");
}

let user = {
    //Thuộc tính
    name: "Alice",
    age: 18,
    //Phương thức (chỉ dùng user mới có thể goi tới sayHi)
    sayHi() {
        //Từ khóa "this" :đại diện cho đối tượng gọi tới phương thức 
        console.log(`Hi ${this.name}`);
    },

    // //Không sd arrow function để định nghĩa cho phương thức cho object
    // //Lý do : arrow function không định nghĩa từ khóa this, mà nó sẽ sử dụng this của hàm bao bọc lấy nó (nếu có)
    // sayHello: () => {

    //     console.log(`Hello ${this.name}`);

    // }

};

user.sayHi();


// ăn cơm vào lúc 7h48
