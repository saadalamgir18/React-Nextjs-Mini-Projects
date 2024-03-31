import React from "react";

function CalculateBill({ bill, tip }:{bill:number, tip:number}) {
  return (
    <div>
      <h1>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}

export default CalculateBill;
