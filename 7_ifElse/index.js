// - If

// ví dụ chuyển số âm sang dương
let a = -5;
if (a < 0) {
    a = -a;
    console.log("gia tri a:", a);
}

// ví dụng tính tiền phạt thẻ tín dụng
function ex1() {
let credit = +document.getElementById("input-credit").value;
let label = +document.getElementById("form-label").value;

let pentalty = 0;
let balance = credit - payment;

if(balance > 0) {
    pentalty = balance * 1.5 / 100
}

alert(`Tiền phạt: ${(pentalty)}`)
}


// If - Else
let b = 5;
let c = 9;

// Ví dụ: tìm số lớn hơn trong 2 số
if (b > c) {
  console.log("b lớn nhất");
} else {
  console.log("c lớn nhất");
}

function ex2() {
  let hours = +document.getElementById("input-hours").value;
  let salary = +document.getElementById("input-salary").value;

  let totalSalary = 0;

  if (hours > 40) {
    let rate = 1.5;
    let overHours = hours - 40;
    let baseSalary = 40 * salary;
    let overtimeSalary = overHours * salary * rate;

    totalSalary = baseSalary + overtimeSalary;
  } else {
    totalSalary = hours * salary;
  }

  alert(`Tổng lương: ${totalSalary}`);
}

// If - Else If - Else
let d = 9;
let f = 9;

if (d > f) {
  console.log("d lớn nhất");
} else if (f > d) {
  console.log("f lớn nhất");
} else {
  console.log("d bằng f");
}

function ex3() {
  let quantity = +document.getElementById("input-quantity").value;
  let price = +document.getElementById("input-price").value;

  let totalPrice = 0;

  if (quantity < 50) {
    totalPrice = price * quantity;
  } else if (quantity <= 100) {
    totalPrice = 49 * price + (quantity - 49) * price * 0.92;
  } else {
    totalPrice =
      49 * price + 51 * price * 0.92 + (quantity - 100) * price * 0.88;
  }

  alert(`Tổng tiền hàng: ${totalPrice}`);
}

// Toán tử bậc 3
// let result = (bieu thu cdieu kien) ? valueA : valueB

let age = 18;
// let allowed;
// if(age >= 18) {
    //  allowed = true}
    //  else {
    //   allowed = false
    //  }


chi xài thay thế if-else khi muốn gán 
let allowed = age >=18 ? true : false

// switch case
/*
switch(x) {
  case valueA: { Tuong tu if(x === valueA)
  ...
  break;
  }
  case valueB: {Tuong tu if(x === valueB)
  ...
  break;
    } 
    
...
}
*/

// tính số ngày trong tháng
function ex4 () {
  let quantity = +document.getElementById
  ("input-month").value;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
       alert ("tháng có 31 ngày");
       break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert ("tháng có 28 ngày")
      break;
      
    default:
      alert ("tháng không hợp lệ");
      break;
  }
}

