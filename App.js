
import React from "react";

function StringLiterals() {
  const name = "jaswitha";
  const age = 20;

  return (
    <div>
      <h2>Using String Literals</h2>
      <p>
        Hello, my name is {name} and I am {age} years old.
      </p>
      <p>{`Welcome ${name}! You are ${age} years old.`}</p>
    </div>
  );
}

export default StringLiterals;

