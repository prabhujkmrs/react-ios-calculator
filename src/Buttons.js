import React from "react";

export default function Buttons(props) {
  let { setMemory, setOperator, setValue, value, memory, operator } = props;

  const handleAdd = () => {
    setMemory(value);
    setOperator("+");
    setValue("");
  };

  const handleSub = () => {
    setMemory(value);
    setOperator("-");
    setValue("");
  };

  const handleMul = () => {
    setMemory(value);
    setOperator("*");
    setValue("");
  };

  const handleDiv = () => {
    setMemory(value);
    setOperator("/");
    setValue("");
  };

  const handleEquals = () => {
    if (memory && operator && value) {
      const result = eval(
        parseFloat(memory, 10) + operator + parseFloat(value, 10)
      );
      setValue(result);
    }
  };

  const handleReset = () => {
    setValue(0);
    setMemory(0);
    setOperator("");
  };

  const handleInput = (e) => {
    if (e.target.value === "%") {
      const percent = value / 100;
      setValue(parseFloat(percent));
      return;
    }

    if (e.target.value === "+/-") {
      const negativeNum = value * -1;
      setValue(negativeNum);
      return;
    }

    if (e.target.value === "." && (value <= 0 || value === "")) {
      setValue("0.");
      return;
    }

    value += e.target.value;
    if (value.indexOf(".") > 0) {
      setValue(value);
      return;
    }
    setValue(parseFloat(value));
  };

  return (
    <div>
      <div className="cal-body">
        <button className="first-row-column" onClick={handleReset}>
          AC
        </button>
        <button className="first-row-column" value="%" onClick={handleInput}>
          %
        </button>
        <button className="first-row-column" value="+/-" onClick={handleInput}>
          +/-
        </button>
        <button className="operator" onClick={handleDiv}>
          /
        </button>

        <button value="7" onClick={handleInput}>
          7
        </button>
        <button value="8" onClick={handleInput}>
          8
        </button>
        <button value="9" onClick={handleInput}>
          9
        </button>
        <button className="operator" onClick={handleMul}>
          x
        </button>

        <button value="4" onClick={handleInput}>
          4
        </button>
        <button value="5" onClick={handleInput}>
          5
        </button>
        <button value="6" onClick={handleInput}>
          6
        </button>
        <button className="operator" onClick={handleSub}>
          -
        </button>

        <button value="1" onClick={handleInput}>
          1
        </button>
        <button value="2" onClick={handleInput}>
          2
        </button>
        <button value="3" onClick={handleInput}>
          3
        </button>
        <button className="operator" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="last-row">
        <button value="0" onClick={handleInput}>
          0
        </button>
        <button value="." onClick={handleInput}>
          .
        </button>
        <button className="operator" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}
