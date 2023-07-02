// 1. Vòng lặp while

// B1: Khởi tạo biến điều kiện
let i = 1;
// B2: Khai báo while và biểu thức điều kiện
while (i <= 5) {
  // B3: Thực hiện các đoạn mã
  console.log("Xin chào, Cybersoft");

  // B4: Thay đổi giá trị của biến điều kiện
  i++;
}

// Bài tập 1: Nhập vào n dương, chẵn. Chia n cho 2 và lặp lại cho đến khi n <= 1
document.getElementById("btn-1").onclick = () => {
  let n = +document.getElementById("input-1").value;
  let outputEl = document.getElementById("output-1");
  let count = 1;

  outputEl.innerHTML = "";

  while (n > 1) {
    n = Math.floor(n / 2);

    outputEl.innerHTML += `<p>count: ${count} - num: ${n}</p>`;

    count++;
  }

  outputEl.classList.remove("d-none");
};

// 2. Vòng lặp do...while
// Điểm khác biệt so với vòng lặp while là do...while sẽ thực hiện các đoạn mã 1 lần trước khi kiểm tra điều kiện

let j = 1;
do {
  console.log("Xin chào, BC52");
  j++;
} while (j <= 5);

// Bài tập 2:
document.getElementById("btn-2").onclick = () => {
  let n = +document.getElementById("input-2").value;
  let i = 1;
  let total = 0;

  do {
    total += i;
    i++;
  } while (i <= n);

  let outputEl = document.getElementById("output-2");
  outputEl.innerHTML = total;
  outputEl.classList.remove("d-none");
};

// Vòng lập for

for(let i = 1; i <= 5; i++)  {
  console.log("xin chào, phong");
}

//Bài tập 3:In tấ cả các số nguyên dương nhỏ hơn 100
function ex3() {
  let output = "";

  for(let i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
      output += i + ", "
    }
  }
  
  //output = (1,3,5,7,9 .... 99)
  console.log("ex3:", output);
}

//4 Vòng lặp lồng nhau
let count = 0;
for(let i = 1; i <= 5; i++)  {
  for(let j = 1; j <= 5; j++) {
    count++
  }
}
console.log("số lần chay:", count)

//Bt 4:in ra hình vuông dấu * có kích thuocs 5*5
function ex4() {
  let output = "";

  for (let i = 1; i <= 5; i++) {
    for (let j =1; j <= 5; j++) {
      output += "* ";
    }

    output += "\n";
  }

  console.log(output);
}
ex4()

//Dùng vòng lặp để duyệt qua từng kí tự trong chuỗi
let message = "Hello Phong"
//Cách truy cập vào một kí tự bất kì trong chuỗi dựa vào chỉ mục (index)
console.log(message[0]); //H
console.log(message[1]);// e

//lấy ra độ dài của chuỗi
console.log(message.length);// 15

//Dùng vòng lặp để duyệt qua từng ký tự chuỗi
for(let i = 0; i < message.length; i++) {
  console.log(message[i]);
}


// Lệnh break thoát ra khỏi vòng lặp 
// Bài tập 5: Cộng giá trị từ 1 + 2 + 3 + ... Cho đến khi giá trị vượt quá 100 thì dừng lại
function ex5() {
  let i = 1;
  let sum = 0;

  while (true) {
    sum += i;

    if (sum > 100) {
      break;
    }

    i++;
  }

  console.log(sum, i);
}
ex5();

// Lệnh continue
function ex6() {
  let total = 0;

  for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue;
    }

    total += i;
  }

  console.log(total);
}
ex6();

// Lệnh return thoát ra khỏi vòng lặp hàm (khi đi đến 5 là ngưng không chạy nưa)
function ex7() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      return i;
    }
    console.log(i);
  }

  console.log("run run run");
}
ex7();

// Bài tập 8: Viết hàm kiểm tra 1 số có phải là số nguyên tố hay không
// SNT: số tự nhiên lớn hơn 1 chỉ chia hết cho 1 và chính nó: 2, 3, 5, 7, 11, 13, ...
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("isPrime(5)", isPrime(5)); // true
console.log("isPrime(10)", isPrime(10)); // false
console.log("isPrime(99726383)", isPrime(99726383)); // false

// Loop

for (let i = 0; i < 3; i++) {
  console.log("Iteration " + i);
}

/* 
  L1:
    i = 0
    i < 3 -> true
    i++ = 1
  L2:
    i = 1
    i < 3 -> true
    i++ = 2
  L3: 
    i = 2
    i < 3 -> true
    i++ = 3
  L4:
    i = 3
    i < 3 -> false
    End

*/
