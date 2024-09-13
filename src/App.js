import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(null); 

  const handleClick = (value) => {
    setInput((prev) => prev + value); 
  }

  const calculate = () => {
    try {
      if(input == ''){
        setResult("Error")
      }else{
        const evalResult = eval(input); 
        setInput(evalResult?.toString()); 
        setResult(evalResult);
      }
    } catch (error) {
      setInput("Error"); 
    }
  }

  const handleClear = () => {
    setInput(''); 
    setResult(null); 
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      
      <input type='text' value={input} readOnly />

      {result !== null && <p>{result}</p>}
      
      <div className='calContainer'>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" onClick={() => handleClick('+')}>+</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" onClick={() => handleClick('-')}>-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" onClick={() => handleClick('*')}>*</button>
        <button type="button" onClick={handleClear}>C</button>
        <button type="button" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={calculate}>=</button>
        <button type="button" onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
