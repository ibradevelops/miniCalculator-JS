"use strict";
// variables
const firstValue = document.querySelector("#value-one");
const secondValue = document.querySelector("#value-two");
const answerSection = document.querySelector(".answer-section");
const btnAdd = document.querySelector(".btn-add");
const btnSub = document.querySelector(".btn-sub");
const btnMulti = document.querySelector(".btn-multi");
const btnDivide = document.querySelector(".btn-divide");
const closeIcon = document.querySelector(".close-icon");
const allInputs = document.querySelectorAll(".input-val");
const allButtons = document.querySelectorAll(".btn");
const backspace = document.querySelectorAll(".backspace");
const firstBackSpace = document.querySelector(".first-backspace");
const secondBackSpace = document.querySelector(".second-backspace");

// function for removing last character in input
const removeLastCharacterFirstInput = () => {
  firstValue.value = firstValue.value.slice(0, -1);
};
const removeLastCharacterSecondInput = () => {
  secondValue.value = secondValue.value.slice(0, -1);
};

// ###
firstValue.addEventListener("input", function () {
  if (firstValue.value) {
    firstBackSpace.classList.remove("hide");
    firstBackSpace.addEventListener("click", function () {
      if (firstValue.value.length < 1) {
        firstBackSpace.classList.add("hide");
      }
    });
  } else {
    firstBackSpace.classList.add("hide");
  }
});
secondValue.addEventListener("input", function () {
  if (secondValue.value) {
    secondBackSpace.classList.remove("hide");
    secondBackSpace.addEventListener("click", function () {
      if (secondValue.value.length < 1) {
        secondBackSpace.classList.add("hide");
      }
    });
  } else {
    secondBackSpace.classList.add("hide");
  }
});
firstBackSpace.addEventListener("click", removeLastCharacterFirstInput);
secondBackSpace.addEventListener("click", removeLastCharacterSecondInput);
//// ###

//main functions
const addFun = () => {
  firstBackSpace.classList.add("hide");
  secondBackSpace.classList.add("hide");
  if (firstValue.value && secondValue.value) {
    const firstValueNum = Number(firstValue.value);
    const secondValueNum = Number(secondValue.value);
    const answer = document.createElement("h2");
    closeIcon.classList.remove("hide");
    answer.setAttribute("class", "answer");
    answerSection.appendChild(answer);
    let result = firstValueNum + secondValueNum;
    answer.textContent = `Rezultat vašeg sabiranja je: ${result}`;
    firstValue.disabled = true;
    secondValue.disabled = true;
    firstValue.style.opacity = "0.6";
    secondValue.style.opacity = "0.6";
    closeIcon.addEventListener("click", function () {
      answer.textContent = "";
      answer.classList.remove("answer");
      closeIcon.classList.add("hide");
      firstValue.value = "";
      secondValue.value = "";
      firstValue.disabled = false;
      secondValue.disabled = false;
      firstValue.style.opacity = "initial";
      secondValue.style.opacity = "initial";
    });

    if (answer) {
      for (const dugme of allButtons) {
        dugme.disabled = true;
        closeIcon.addEventListener("click", function () {
          dugme.disabled = false;
        });
      }
    }

    if (firstValue.value < 0 || secondValue.value < 0) {
      answer.textContent = "Broj mora biti veći od 0!";
    }
  }
};

const subFun = () => {
  firstBackSpace.classList.add("hide");
  secondBackSpace.classList.add("hide");
  if (firstValue.value && secondValue.value) {
    const firstValueNum = Number(firstValue.value);
    const secondValueNum = Number(secondValue.value);
    const answer = document.createElement("h2");
    closeIcon.classList.remove("hide");
    answer.setAttribute("class", "answer");
    answerSection.appendChild(answer);
    let result = firstValueNum - secondValueNum;
    answer.textContent = `Rezultat vašeg oduzimanja je: ${result}`;
    firstValue.disabled = true;
    secondValue.disabled = true;
    firstValue.style.opacity = "0.6";
    secondValue.style.opacity = "0.6";
    closeIcon.addEventListener("click", function () {
      answer.textContent = "";
      answer.classList.remove("answer");
      closeIcon.classList.add("hide");
      firstValue.value = "";
      secondValue.value = "";
      firstValue.disabled = false;
      secondValue.disabled = false;
      firstValue.style.opacity = "initial";
      secondValue.style.opacity = "initial";
    });

    if (answer) {
      for (const dugme of allButtons) {
        dugme.disabled = true;
        closeIcon.addEventListener("click", function () {
          dugme.disabled = false;
        });
      }
    }

    if (firstValue.value < 0 || secondValue.value < 0) {
      answer.textContent = "Broj mora biti veći od 0!";
    }
  }
};

const multiFun = () => {
  firstBackSpace.classList.add("hide");
  secondBackSpace.classList.add("hide");
  if (firstValue.value && secondValue.value) {
    const firstValueNum = Number(firstValue.value);
    const secondValueNum = Number(secondValue.value);
    const answer = document.createElement("h2");
    closeIcon.classList.remove("hide");
    answer.setAttribute("class", "answer");
    answerSection.appendChild(answer);
    let result = firstValueNum * secondValueNum;
    answer.textContent = `Rezultat vašeg množenja je: ${result}`;
    firstValue.disabled = true;
    secondValue.disabled = true;
    firstValue.style.opacity = "0.6";
    secondValue.style.opacity = "0.6";
    closeIcon.addEventListener("click", function () {
      answer.textContent = "";
      answer.classList.remove("answer");
      closeIcon.classList.add("hide");
      firstValue.value = "";
      secondValue.value = "";
      firstValue.disabled = false;
      secondValue.disabled = false;
      firstValue.style.opacity = "initial";
      secondValue.style.opacity = "initial";
    });

    if (answer) {
      for (const dugme of allButtons) {
        dugme.disabled = true;
        closeIcon.addEventListener("click", function () {
          dugme.disabled = false;
        });
      }
    }

    if (firstValue.value < 0 || secondValue.value < 0) {
      answer.textContent = "Broj mora biti veći od 0!";
    }
  }
};

const divideFun = () => {
  firstBackSpace.classList.add("hide");
  secondBackSpace.classList.add("hide");
  if (firstValue.value && secondValue.value) {
    const firstValueNum = Number(firstValue.value);
    const secondValueNum = Number(secondValue.value);
    const answer = document.createElement("h2");
    closeIcon.classList.remove("hide");
    answer.setAttribute("class", "answer");
    answerSection.appendChild(answer);
    let result = firstValueNum / secondValueNum;
    result = result.toFixed(2);
    answer.textContent = `Rezultat vašeg djeljenja je: ${result}`;
    firstValue.disabled = true;
    secondValue.disabled = true;
    firstValue.style.opacity = "0.6";
    secondValue.style.opacity = "0.6";
    closeIcon.addEventListener("click", function () {
      answer.textContent = "";
      answer.classList.remove("answer");
      closeIcon.classList.add("hide");
      firstValue.value = "";
      secondValue.value = "";
      firstValue.disabled = false;
      secondValue.disabled = false;
      firstValue.style.opacity = "initial";
      secondValue.style.opacity = "initial";
    });

    if (answer) {
      for (const dugme of allButtons) {
        dugme.disabled = true;
        closeIcon.addEventListener("click", function () {
          dugme.disabled = false;
        });
      }
    }

    if (firstValue.value < 0.0000000001 || secondValue.value < 0.0000000001) {
      answer.textContent = "Ne možemo dijeliti broj sa 0!";
    }
  }
};

// to disable some keyboard buttons, that can be used, when input is "type='number'"
document.addEventListener("keydown", function (e) {
  if (e.code === "KeyE" || e.key === "Tab") {
    e.preventDefault();
  }
});

// to limit input length
for (const input of allInputs) {
  input.addEventListener("input", function () {
    if (input.value.length > 9) {
      alert("Input polje ne može sadržati više od 9 karaktera!");
      input.value = input.value.slice(0, 9);
      input.blur();
    }
  });
}

// Buttons
btnAdd.addEventListener("click", addFun);
btnSub.addEventListener("click", subFun);
btnMulti.addEventListener("click", multiFun);
btnDivide.addEventListener("click", divideFun);
