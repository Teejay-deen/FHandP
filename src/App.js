import "./App.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
