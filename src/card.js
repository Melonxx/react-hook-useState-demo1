import React, { useState } from "react";

function Card() {
  const [state, setState] = useState({ n: 0 });
  const add = () => {
    setState({
      n: state.n + 1
    });
  };
  return (
    <div>
      {state.n}
      <input onClick={add} value="add" type="button" />
    </div>
  );
}

export default Card;
