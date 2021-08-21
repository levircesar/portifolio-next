import React, { useState } from "react";
import PayPal from "../comṕonents/Paypal";

function Teste() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="Teste">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Teste;