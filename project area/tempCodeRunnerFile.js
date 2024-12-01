import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";

const Calculator = () => {
  const [num, setNum] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculation = Function('"use strict";return (' + num + ')')();
        setNum(calculation.toString());
      } catch (error) {
        setNum('Error');
      }
    } else if (value === 'C') {
      setNum('');
    } else {
      setNum(num + value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-blue-100 rounded-lg shadow-md">
    <Input
      type="text"
      value={num}
      onChange={(e) => setNum(e.target.value)}
      placeholder="Enter a number"
      className="w-full mb-4 p-4 text-lg font-bold text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div className="grid grid-cols-4 gap-2">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('7')}>7</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('8')}>8</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('9')}>9</Button>
      <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('/')}>/</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('4')}>4</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('5')}>5</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('6')}>6</Button>
      <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('*')}>*</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('1')}>1</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('2')}>2</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('3')}>3</Button>
      <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('-')}>-</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('0')}>0</Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('.')}>.</Button>
      <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('=')}>=</Button>
      <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('+')}>+</Button>
      <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleButtonClick('C')}>C</Button>
    </div>
    </div>
  );
};

export default Calculator;