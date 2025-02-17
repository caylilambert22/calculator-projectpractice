const inputField = document.getElementById("form_input");
const numberButtons = document.querySelectorAll(".numberButtons-container button")



const additionButton = document.getElementById("add");
const subtractionButton = document.getElementById("sub");
const multiplyButton = document.getElementById("mult");
const divideButton = document.getElementById("divide");


const clearButton = document.getElementById("clear");
const submitButton = document.getElementById("submit-button");

let shouldClear = false;

//input numbers into field - not complete

numberButtons.forEach(button => {
  button.addEventListener("click", () => {

    if (shouldClear) {
      inputField.value = "";
      shouldClear = false;
      return;
    }
  inputField.value += button.textContent;

});
});

//clear input field
clearButton.addEventListener("click", () => {
  inputField.value ="";
  shouldClear = false;
})


//operations

//addition
additionButton.addEventListener("click", () => {
  const lastChar = inputField.value.slice(-1);
      if(inputField.value !== "" && !isNaN(lastChar)) {
        inputField.value += additionButton.textContent;
      }
})


//subtraction
subtractionButton.addEventListener("click", () => {
  const lastChar = inputField.value.slice(-1);
      if(inputField.value !== "" && !isNaN(lastChar)) {
        inputField.value += subtractionButton.textContent;
      }
})

//multiply

multiplyButton.addEventListener("click", () => {
  const lastChar = inputField.value.slice(-1);
      if(inputField.value !== "" && !isNaN(lastChar)) {
        inputField.value += multiplyButton.textContent;
      }
})
//submit button - not complete
submitButton.addEventListener("click", function() {
  let inputValue = inputField.value.replace(/x/g, "*");
  if (inputValue !== "" && !isNaN(inputValue.slice(-1))) {
  inputField.value = eval(inputValue);
  shouldClear = true;
  }
})