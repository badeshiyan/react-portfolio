import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Containers/About/About.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Portfolio from "./Containers/Portfolio/Portfolio.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
