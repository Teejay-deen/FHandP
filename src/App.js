import "./App.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
