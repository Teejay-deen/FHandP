import "./App.css";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Agent from "./components/Agent/Agent";
import Contact from "./components/Contact/Contact";
import Login from "./components/pages/Login";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/agent"  component={Agent} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
