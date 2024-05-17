import "./App.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
