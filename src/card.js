import React, { useState } from "react";

function Card() {
  const [state, setState] = useState({
    n: 0,
    des: "这是一段描述，只是为了多增加一个属性而已"
  });
  const add = () => {
    setState({
      ...state,
      n: state.n + 1
    });
  };
  return (
    <div>
      {state.des}
      <br />
      {state.n}
      <br />
      <input onClick={add} value="add" type="button" />
    </div>
  );
}

export default Card;
