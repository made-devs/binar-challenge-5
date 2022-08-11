"use strict";
// Selecting elements
const btnBatu = document.querySelector("#btn-batu");
const btnKertas = document.querySelector("#btn-kertas");
const btnGunting = document.querySelector("#btn-gunting");
const btnBatuCom = document.querySelector("#btn-batu-com");
const btnKertasCom = document.querySelector("#btn-kertas-com");
const btnGuntingCom = document.querySelector("#btn-gunting-com");
const btnRefresh = document.querySelector("#btn-refresh");
const versusEl = document.querySelector(".versus");
const player1Win = document.querySelector(".player-1-win");
const playerComWin = document.querySelector(".player-com-win");
const draw = document.querySelector(".player-draw");

// Function
const btnDisabled = function () {
  btnBatu.disabled = true;
  btnKertas.disabled = true;
  btnGunting.disabled = true;
};

const btnEnabled = function () {
  btnBatu.disabled = false;
  btnKertas.disabled = false;
  btnGunting.disabled = false;
};

const logicGame = function () {};

// Starting conditions
const start = function () {
  player1Win.classList.add("hidden");
  playerComWin.classList.add("hidden");
  draw.classList.add("hidden");
  versusEl.classList.remove("hidden");
  btnBatu.classList.remove("bg-hand-2");
  btnKertas.classList.remove("bg-hand-2");
  btnGunting.classList.remove("bg-hand-2");
  btnBatuCom.classList.remove("bg-hand-2");
  btnKertasCom.classList.remove("bg-hand-2");
  btnGuntingCom.classList.remove("bg-hand-2");
};
start();

// Button batu functionality
btnBatu.addEventListener("click", function () {
  // 1. Generating a random com pick
  btnDisabled();
  btnBatu.classList.add("bg-hand-2");
  versusEl.classList.add("hidden");
  const comPick = Math.trunc(Math.random() * 3) + 1;
  // 2. Logic game
  if (comPick === 1) {
    btnBatuCom.classList.add("bg-hand-2");
    draw.classList.remove("hidden");
  } else if (comPick === 2) {
    btnKertasCom.classList.add("bg-hand-2");
    playerComWin.classList.remove("hidden");
  } else if (comPick === 3) {
    btnGuntingCom.classList.add("bg-hand-2");
    player1Win.classList.remove("hidden");
  }
});

// Button kertas functionality
btnKertas.addEventListener("click", function () {
  // 1. Generating a random com pick
  btnDisabled();
  btnKertas.classList.add("bg-hand-2");
  versusEl.classList.add("hidden");
  const comPick = Math.trunc(Math.random() * 3) + 1;
  // 2. Logic game
  if (comPick === 1) {
    btnBatuCom.classList.add("bg-hand-2");
    player1Win.classList.remove("hidden");
  } else if (comPick === 2) {
    btnKertasCom.classList.add("bg-hand-2");
    draw.classList.remove("hidden");
  } else if (comPick === 3) {
    btnGuntingCom.classList.add("bg-hand-2");
    playerComWin.classList.remove("hidden");
  }
});

// Button gunting functionality
btnGunting.addEventListener("click", function () {
  // 1. Generating a random com pick
  btnDisabled();
  btnGunting.classList.add("bg-hand-2");
  versusEl.classList.add("hidden");
  const comPick = Math.trunc(Math.random() * 3) + 1;
  // 2. Logic game
  if (comPick === 1) {
    btnBatuCom.classList.add("bg-hand-2");
    playerComWin.classList.remove("hidden");
  } else if (comPick === 2) {
    btnKertasCom.classList.add("bg-hand-2");
    player1Win.classList.remove("hidden");
  } else if (comPick === 3) {
    btnGuntingCom.classList.add("bg-hand-2");
    draw.classList.remove("hidden");
  }
});

// Button replay functionality
btnRefresh.addEventListener("click", function () {
  btnEnabled();
  start();
});
