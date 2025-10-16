const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button === clearBtn) {
      currentInput = '';
      updateDisplay();
      return;
    }

    if (button === equalsBtn) {
      calculateResult();
      return;
    }

    // Não adicionar múltiplos operadores seguidos
    if (isOperator(value)) {
      if (currentInput === '') return; // não começa com operador
      if (isOperator(currentInput.slice(-1))) {
        // substitui operador
        currentInput = currentInput.slice(0, -1) + value;
        updateDisplay();
        return;
      }
    }

    // Adiciona valor
    currentInput += value;
    updateDisplay();
  });
});

function updateDisplay() {
  display.value = currentInput;
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function calculateResult() {
  if (currentInput === '') return;

  try {
    // Avalia a expressão matemática
    let result = eval(currentInput);

    // Limita casas decimais
    if (typeof result === 'number' && !Number.isInteger(result)) {
      result = result.toFixed(6);
      // Remove zeros desnecessários
      result = parseFloat(result).toString();
    }

    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = '';
    display.value = 'Erro';
  }
}
