import "./Transfers.css";
import { useState } from "react";
import Account from "./Account";

const Transfers = ({ balances, setBalances }) => {
  const [fromAccountSelected, setFromAccountSelected] =
    useState("savings-from");

  const [toAccountSelected, setToAccountSelected] = useState("savings-to");

  const [input, setInput] = useState();

  function submitHandler(e) {
    let savingsBalance = balances.savings;
    let checkingBalance = balances.checking;

    console.log(typeof savingsBalance);

    if (fromAccountSelected === "savings-from") {
      savingsBalance -= input;
    } else {
      checkingBalance -= input;
    }

    console.log(typeof savingsBalance);
    if (toAccountSelected === "savings-to") {
      savingsBalance += +input;
    } else {
      checkingBalance += +input;
    }

    console.log(typeof savingsBalance);

    console.log(savingsBalance);
    console.log(checkingBalance);

    setBalances({
      savings: savingsBalance,
      checking: checkingBalance,
    });

    console.log(balances);
  }

  return (
    <div>
      <div className="form-wrapper">
        <div className="from-container">
          <p>From: </p>
          <select
            name="from"
            id="from"
            value={fromAccountSelected}
            onChange={(e) => setFromAccountSelected(e.target.value)}
          >
            <option value="savings-from">Savings</option>
            <option value="checking-from">Checking</option>
          </select>
        </div>
        <div className="to-container">
          <p>To: </p>
          <select
            name="to"
            id=""
            className="to-space"
            value={toAccountSelected}
            onChange={(e) => setToAccountSelected(e.target.value)}
          >
            <option value="savings-to">Savings</option>
            <option value="checking-to">Checking</option>
          </select>
        </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="Amount:"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={submitHandler}>
            Transfer
          </button>
        </div>
      </div>
      <Account balances={balances} />
    </div>
  );
};

export default Transfers;
