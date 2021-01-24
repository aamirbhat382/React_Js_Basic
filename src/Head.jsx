import React from "react";

function Head() {
  return (
    <>
      <h1>Hello I,m Heading</h1> <p>Hello From Para</p>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="Card-div">
        <div className="card">
          <h1>Aamir Hussain Bhat</h1>
        </div>
        <div className="card">
          <h1>Aamir Hussain Bhat</h1>
        </div>
      </div>
    </>
  );
}

export default Head;
export { Card };
