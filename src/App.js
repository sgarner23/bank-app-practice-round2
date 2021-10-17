import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";

import { useState } from "react";
import Account from "./Components/UI/Account";
import Transfers from "./Components/UI/Transfers";

function App() {
  const [balances, setBalances] = useState({
    savings: 5432.47,
    checking: 426.89,
  });

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/account">
            <Account balances={balances} />
          </Route>
          <Route path="/transfers">
            <Transfers balances={balances} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
