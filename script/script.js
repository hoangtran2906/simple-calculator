function addValue() {
  // get the operands value
  // parse to integer. You can use: parseInt(input, 10);
  num1 = parseInt(document.getElementById("input_a").value, 10);
  num2 = parseInt(document.getElementById("input_b").value, 10);
  if (Number.isNaN(num1)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_a").value = "";
    document.getElementById("input_a").focus();
    document.mycalculator.output.value = "";
  } else if (Number.isNaN(num2)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_b").value = "";
    document.getElementById("input_b").focus();
    document.mycalculator.output.value = "";
  } else {
    // perform operation
    result = num1 + num2;
    // creating the text output
    text = num1 + " + " + num2 + " = " + result;
    // (if you want to check) print out in console
    console.log(text);
    // change the text area
    document.mycalculator.output.value = text;
  }
}

function mulValue() {
  num1 = parseInt(document.getElementById("input_a").value, 10);
  num2 = parseInt(document.getElementById("input_b").value, 10);
  if (Number.isNaN(num1)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_a").value = "";
    document.getElementById("input_a").focus();
    document.mycalculator.output.value = "";
  } else if (Number.isNaN(num2)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_b").value = "";
    document.getElementById("input_b").focus();
    document.mycalculator.output.value = "";
  } else {
    // perform operation
    result = num1 * num2;
    // creating the text output
    text = num1 + " x " + num2 + " = " + result;
    // (if you want to check) print out in console
    console.log(text);
    // change the text area
    document.mycalculator.output.value = text;
  }
}

function divValue() {
  num1 = parseInt(document.getElementById("input_a").value, 10);
  num2 = parseInt(document.getElementById("input_b").value, 10);
  if (Number.isNaN(num1)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_a").value = "";
    document.getElementById("input_a").focus();
    document.mycalculator.output.value = "";
  } else if (Number.isNaN(num2)) {
    alert("Wrong input, please input numbers only.");
    console.clear();
    document.getElementById("input_b").value = "";
    document.getElementById("input_b").focus();
    document.mycalculator.output.value = "";
  } else if (num2 === 0) {
    alert("Denumerator can't be 0.");
    console.clear();
    document.getElementById("input_b").value = "";
    document.getElementById("input_b").focus();
    document.mycalculator.output.value = "";
  } else {
    // perform operation
    result = num1 / num2;
    // creating the text output
    text = num1 + " : " + num2 + " = " + result;
    // (if you want to check) print out in console
    console.log(text);
    // change the text area
    document.mycalculator.output.value = text;
  }
}
