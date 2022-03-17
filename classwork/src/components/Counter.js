import React from "react";

export const Counter = () => {
  const [value, setvalue] = React.useState(0);

  const handleIncrease = () => {
    const h = (state) => state + 1;
    setvalue(h);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};
