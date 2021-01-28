import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About.jsx";
import Contact from "./containers/Contact/Contact.jsx";
import Portfolio from "./containers/Portfolio/Portfolio.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
