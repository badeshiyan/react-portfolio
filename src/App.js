import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Containers/About/About.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Portfolio from "./Containers/Portfolio/Portfolio.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Containers/About/About.jsx";

const styles = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp4222009.jpg')",
  alignItems: "stretch",
};

function App() {
  return (
    <div className="App" style={styles}>
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
