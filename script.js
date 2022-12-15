const inputs = document.querySelectorAll(".otp-input");
const validInputValues = [  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "Backspace","Tab"];

const moveFocusToPreviousInput = (eventOriginationIndex) => {
  if (eventOriginationIndex === 0) {
    return;
  }

  const inputToFocus = inputs[eventOriginationIndex - 1];
  inputToFocus.focus();
};

const moveFocusToNextInput = (eventOriginationIndex) => {
  if (eventOriginationIndex === 5) {
    return;
  }

  const inputToFocus = inputs[eventOriginationIndex + 1];
  inputToFocus.focus();
};

const onInputChange = (event) => {
  if (!validInputValues.includes(event.key)) {
    return;
  }

  const input = event.target;
  const index = parseInt(input.getAttribute("data-index"));

  if (event.key === "Backspace") {
    moveFocusToPreviousInput(index);
    return;
  }
  moveFocusToNextInput(index);

 
};
const onMaxLength= (event) => {
    const len = event.target.value.length;
    //alert("ss");
    if(len==1){
        moveFocusToNextInput(parseInt(event.target.getAttribute("data-index")));
    }
}
inputs.forEach((input) => {
  //input.addEventListener("keyup", onInputChange);
  input.addEventListener("keyup", onMaxLength);
});

inputs.forEach((input) => {
    input.addEventListener("keydown", (e) => console.log(e.keyCode))
  input.addEventListener("keydown", (event) => {
    //alert("hii0"+validInputValues.includes(event.key));
    if (!validInputValues.includes(event.key)) {
        //alert("hello");
        event.preventDefault();
      
    }
  });
});