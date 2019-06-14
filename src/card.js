import React, { useState, useEffect } from "react";

function Card() {
  const [state, setState] = useState({
    n: 0,
    des: "这是一段描述，只是为了多增加一个属性而已"
  });
  useEffect(() => {
    document.querySelector("#myDiv").innerHTML = state.des;
  });
  // document.querySelector("#myDiv").innerHTML = state.des + "1231313";
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
