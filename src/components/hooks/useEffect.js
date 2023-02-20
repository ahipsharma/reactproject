import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 100;
  const [myNum, setMyNum] = React.useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`
  }); // If the [] is left empty, then the useEffect runs only once and no further changes in the value would be seen.
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
