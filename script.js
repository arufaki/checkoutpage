const min = document.querySelector(".min");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");

let a = 1;

// plus.forEach((plus) => {});

plus.addEventListener("click", (e) => {
  a++;
  a = a < 10 ? "" + a : a;
  num.innerText = a;
  console.log(a);
});

min.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "" + a : a;
    num.innerText = a;
  }
});

const tambah = document.querySelector(".plus-2");
const kurang = document.querySelector(".min-2");
const angka = document.querySelector(".num-2");

let i = 1;

tambah.addEventListener("click", () => {
  i++;
  i = i < 10 ? "" + i : i;
  angka.innerText = i;
});

kurang.addEventListener("click", () => {
  if (i > 1) {
    i--;
    i = i < 10 ? "" + i : i;
    angka.innerText = i;
  }
});
