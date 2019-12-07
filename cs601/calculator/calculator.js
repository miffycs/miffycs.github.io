var calculate = function calculate(n1, operator, n2) {
  var firstNum = parseFloat(n1);
  var secondNum = parseFloat(n2);
  if (operator === 'add') return firstNum + secondNum;
  if (operator === 'subtract') return firstNum - secondNum;
  if (operator === 'multiply') return firstNum * secondNum;
  if (operator === 'divide') return firstNum / secondNum;
};

var getKeyType = function getKeyType(key) {
  var action = key.dataset.action;
  if (!action) return 'number';
  if (action === 'add' || action === 'subtract' || 
      action === 'multiply' || action === 'divide') {
    return 'operator';
  }
  return action;
};

var createResultString = function createResultString(key, displayedNum, state) {
  var keyContent = key.textContent;
  var keyType = getKeyType(key);

  var firstValue = state.firstValue;
  var operator = state.operator;
  var modValue = state.modValue;
  var previousKeyType = state.previousKeyType;

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate' ?
      keyContent :
      displayedNum + keyContent;
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.';
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
    return displayedNum;
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate' ?
      calculate(firstValue, operator, displayedNum) :
      displayedNum;
  }

  if (keyType === 'clear') return 0;

  if (keyType === 'calculate') {
    return firstValue ?
      previousKeyType === 'calculate' ?
        calculate(displayedNum, operator, modValue) :
        calculate(firstValue, operator, displayedNum) :
      displayedNum;
  }
};

var updateCalculatorState = function updateCalculatorState(
  key, calculator, calculatedValue, displayedNum) {
  
  var keyType = getKeyType(key);
  var _calculator$dataset = calculator.dataset;
  var firstValue = _calculator$dataset.firstValue;
  var operator = _calculator$dataset.operator;
  var modValue = _calculator$dataset.modValue;
  var previousKeyType = _calculator$dataset.previousKeyType;
  calculator.dataset.previousKeyType = keyType;

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action;
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate' ?
      calculatedValue :
      displayedNum;
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate' ?
      modValue :
      displayedNum;
  }

  if (keyType === 'clear' && key.textContent === 'AC') {
    calculator.dataset.firstValue = '';
    calculator.dataset.modValue = '';
    calculator.dataset.operator = '';
    calculator.dataset.previousKeyType = '';
  }
};

var updateVisualState = function updateVisualState(key, calculator) {
  var keyType = getKeyType(key);
  Array.from(key.parentNode.children).forEach(function (k) {
    return k.classList.remove('is-depressed');
  });

  if (keyType === 'operator') key.classList.add('is-depressed');
  if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC';
  if (keyType !== 'clear') {
    var clearButton = calculator.querySelector('[data-action=clear]');
    clearButton.textContent = 'CE';
  }
};

var calculator = document.querySelector('.calculator');
var display = calculator.querySelector('.calculator__display');
var keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return;
  var key = e.target;
  var displayedNum = display.textContent;
  var resultString = createResultString(key, displayedNum, calculator.dataset);

  display.textContent = resultString;
  updateCalculatorState(key, calculator, resultString, displayedNum);
  updateVisualState(key, calculator);
});