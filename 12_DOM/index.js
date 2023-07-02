// Truy cập phần tử bằng tag name
let pEls = document.getElementsByTagName("p");
console.log("pEls:", pEls);

for (let i = 0; i < pEls.length; i++) {
  pEls[i].style.color = "green";
}

// Truy cặp phần tử bằng class name
let p1Els = document.getElementsByClassName("p-1");
console.log("p1Els", p1Els);

for (let i = 0; i < p1Els.length; i++) {
  p1Els[i].style.fontSize = "30px";
}

// querySelector(aelector)
// selector id :#title
// selector class : .title
// delector tag : p, h1, div, ...o

let firstP1El = document.querySelector(".p-1");
console.log("firstP1El:", firstP1El);

// querySelectorAll(selector): Trả về danh sách các phần tử khớp selector đó
let liEls = document.querySelectorAll(".list > li");
console.log("liEls:", liEls);

let activeLiEl = document.querySelectorAll(".list li.active")
console.log("activeLiEl:", activeLiEl);

