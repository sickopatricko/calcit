"use strict";

const jeden = document.querySelector(".jeden");
const dwa = document.querySelector(".dwa");
const trzy = document.querySelector(".trzy");
const cztery = document.querySelector(".cztery");
const piec = document.querySelector(".piec");
const szesc = document.querySelector(".szesc");
const siedem = document.querySelector(".siedem");
const osiem = document.querySelector(".osiem");
const dziewiec = document.querySelector(".dziewiec");
const zero = document.querySelector(".zeroo");
const rownosc = document.querySelector(".rownosc");
const ce = document.querySelector(".ce");
const dzielenie = document.querySelector(".dzielenie");
const mnozenie = document.querySelector(".mnozenie");
const odejmowanie = document.querySelector(".odjemowanie");
const dodawanie = document.querySelector(".dodawanie");
let wynik = document.querySelector("#wynik");

const btnsSigns = [rownosc, dzielenie, mnozenie, odejmowanie, dodawanie];

const btnsNum = [
  jeden,
  dwa,
  trzy,
  cztery,
  piec,
  szesc,
  siedem,
  osiem,
  dziewiec,
  zero,
];
let curr;

btnsNum.forEach(e => {
  e.addEventListener("click", function () {
    wynik.innerHTML = e.textContent;
  });
});
// siedem.addEventListener("click", () => {
//   wynik.innerHTML = siedem.textContent;
// });
