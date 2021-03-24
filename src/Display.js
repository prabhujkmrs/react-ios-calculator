import React from "react";

export default function Display(props) {
  const { value, setValue } = props;

  return (
    <div className="input-area">
      <input
        type="text"
        id="inputArea"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={(input) => input && input.focus()}
      />
    </div>
  );
}
