import "./App.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about">
              <About />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
