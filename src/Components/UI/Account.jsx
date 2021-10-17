import "./Account.css";

const Account = ({ balances }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const accountSavings = numberWithCommas(balances.savings);
  const accountChecking = numberWithCommas(balances.checking);

  return (
    <div className="screen-container">
      <div className="account-balance">
        <p>Savings:</p>
        <p>{`$${accountSavings}`}</p>
      </div>
      <div className="account-balance">
        <p>Checking:</p>
        <p>{`$${accountChecking}`}</p>
      </div>
    </div>
  );
};

export default Account;
