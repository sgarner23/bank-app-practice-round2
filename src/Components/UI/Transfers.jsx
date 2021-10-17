import "./Transfers.css";

const Transfers = () => {
  return (
    <div>
      <div className="form-wrapper">
        <div className="from-container">
          <p>From: </p>
          <select name="from" id="from">
            <option value="savings-from">Savings</option>
            <option value="checking-from">Checking</option>
          </select>
        </div>
        <div className="to-container">
          <p>To: </p>
          <select name="to" id="" className="to-space">
            <option value="savings-to">Savings</option>
            <option value="checking-to">Checking</option>
          </select>
        </div>
        <div className="input-container">
          <input type="number" placeholder="Amount:" />
          <button type="submit">Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
