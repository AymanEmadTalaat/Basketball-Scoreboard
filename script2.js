let score1 = 0;
let score2 = 0;

let scoreOne = document.querySelector("#one");
let scoreTwo = document.querySelector("#two");

const btnOneSrcOne = document.getElementById("btn1-scr1");
const btnTwoSrcOne = document.getElementById("btn2-scr1");
const btnThreeSrcOne = document.getElementById("btn3-scr1");

const btnOneSrcTwo = document.getElementById("btn1-scr2");
const btnTwoSrcTwo = document.getElementById("btn2-scr2");
const btnThreeSrcTwo = document.getElementById("btn3-scr2");
const leading = document.getElementById("leading");

function scoreBoardOne() {
  score1 += 1;
  scoreOne.textContent = score1;
}

function scoreBoardTwo() {
  score1 += 2;
  scoreOne.textContent = score1;
}

function scoreBoardThree() {
  score1 += 3;
  scoreOne.textContent = score1;
}

function scoreBoardFour() {
  score2 += 1;
  scoreTwo.textContent = score2;
}

function scoreBoardFive() {
  score2 += 2;
  scoreTwo.textContent = score2;
}

function scoreBoardSix() {
  score2 += 3;
  scoreTwo.textContent = score2;
}

btnOneSrcOne.addEventListener("click", function () {
  scoreBoardOne();
  lead();
});

btnTwoSrcOne.addEventListener("click", function () {
  scoreBoardTwo();
  lead();
});

btnThreeSrcOne.addEventListener("click", function () {
  scoreBoardThree();
  lead();
});

btnOneSrcTwo.addEventListener("click", function () {
  scoreBoardFour();
  lead();
});

btnTwoSrcTwo.addEventListener("click", function () {
  scoreBoardFive();
  lead();
});

btnThreeSrcTwo.addEventListener("click", function () {
  scoreBoardSix();
  lead();
});

function lead() {
  if (score1 > score2) {
    leading.textContent = `
    <p id="leading">
    Leading (Home)
    </p>`;
    leading.innerHTML = leading.textContent;
  } else if (score2 > score1) {
    leading.textContent = `
    <p id="leading">
    Leading (Guest)
    </p>`;
    leading.innerHTML = leading.textContent;
  }
}
