function greet() {
  var name = prompt("Please enter your name: ");
  if (name === null || name === "") {
    alert("You didn't enter your name, but still, welcome!");
  } else {
    alert("Welcome " + name + "!");
  }
}

function calc() {
  var n1 = askNum("first");
  var n2 = askNum("second");
  var sum = addSum(n1, n2);
  if (validateNum(sum)) {
    alert("The sum of your two numbers is: " + sum);
    sumEval(sum);
  } else {
    alert("You did not enter a proper number, I do not understand the input!");
  }
}

function askNum(numName) {
  return parseFloat(prompt("Please enter the " + numName + " number: "));
}

function addSum (n1, n2) {
  return (n1 + n2);
}

function isFloat(n) {
  return n === +n && n !== (n | 0);
}

function isInt(n) {
  return n === +n && n === (n | 0);
}

function validateNum(sum) {
  return isFloat(sum) || isInt(sum);
}

function sumEval(sum) {
  if (sum > 10) {
    alert("That is a big number.");
  } else {
    alert("That is a small number.");
  }
}

function askCont() {
  var cont = window.confirm("Do you want to add two numbers again?");
  if (cont) {
    alert("You've chosen to use the calculator again!");
    return true;
  } else {
    alert("Thanks for using the program! Program will now exit...");
    alert("Although, you are now free to try out this premium calculator instead!");
    return false;
  }
}