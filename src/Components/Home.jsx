import React, { useState } from 'react';
import './home.css'
const SimpleCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Error';
        break;
      default:
        res = 'Invalid Operation';
    }

    setResult(res);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 calculator-container">
      <div className="calculator bg-white p-8 rounded shadow-md backdrop-blur-lg bg-opacity-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-500  p-4 rounded text-center">Calculator</h1>
        <div className="flex space-x-4 mb-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Number 1"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Number 2"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <button 
            onClick={() => handleCalculate('+')} 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            +
          </button>
          <button 
            onClick={() => handleCalculate('-')} 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            -
          </button>
          <button 
            onClick={() => handleCalculate('*')} 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            *
          </button>
          <button 
            onClick={() => handleCalculate('/')} 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            /
          </button>
        </div>
        <div className="text-xl font-bold">
          Result: {result !== null ? result : ''}
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
