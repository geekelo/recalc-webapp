import React, { useState } from 'react';
import calculate from '../logic/calculate';

function CalculatorStructure() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const setupEvent = (e) => {
    const btnName = e.target.textContent;
    const result = calculate(state, btnName);
    setState(result);
  };
  const { total, next, operation } = state;

  return (
    <div className="calcFrag overlay">
      <div className="calcText">
        <h2>Let&apos;s do Some Maths!</h2>
        <p>
          Start optimizing your calculations and boost your
          productivity with Recalc Calculator. It&apos;s time to
          say hello to efficiency and bid farewell to mathematical challenges.
          Embrace the power of Recalc Calculator and unlock a world of accurate
          and effortless computations today!
          Ready to dive in? Simply start calculating and experience the magic of
          Recalc Calculator
        </p>
      </div>
      <section className="calculatorContain">
        <div className="displaySection" data-testid="display-section">
          {total}
          {operation}
          {next}
        </div>
        <main className="btnContainer">
          <button type="button" className="buttons btnSet" data-testid="btn-ac" onClick={setupEvent}>AC</button>
          <button type="button" className="buttons btnSet" data-testid="btn-plus-minus" onClick={setupEvent}>+/-</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>%</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>÷</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>7</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>8</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>9</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>x</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>4</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>5</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>6</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>-</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>1</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>2</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>3</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>+</button>
          <button type="button" className="buttons btnSet zeroBtn" onClick={setupEvent}>0</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>.</button>
          <button type="button" className="buttons btnSet" onClick={setupEvent}>=</button>
        </main>
      </section>
    </div>
  );
}

export default CalculatorStructure;
