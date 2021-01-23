import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PortfolioA from "./pages/PortfolioA";
import PortfolioB from "./pages/PortfolioB";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css"
import LabelNav from "./components/LabelNav"

function App() {
  return (
    <Router>
      <div>
        <LabelNav />
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolioA" component={PortfolioA} />
          <Route exact path="/portfolioB" component={PortfolioB} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;