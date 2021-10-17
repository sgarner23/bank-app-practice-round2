import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="button">
        <Link to="/account" className="link-text">
          Account
        </Link>
      </div>
      <div className="button">
        <Link to="/transfers" className="link-text">
          Transfers
        </Link>
      </div>
    </div>
  );
}

export default Header;
