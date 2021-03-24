import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function () {
  const [value, setValue] = React.useState(0);
  const [memory, setMemory] = React.useState(0);
  const [operator, setOperator] = React.useState();

  return (
    <div>
      <Display value={value} setValue={setValue} />
      <Buttons
        setMemory={setMemory}
        setOperator={setOperator}
        setValue={setValue}
        value={value}
        memory={memory}
        operator={operator}
      />
    </div>
  );
}
