import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DataStore from "./Components/DataStore";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/user/:id/:title/:discraption`} component={DataStore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
