import Home from "./Home";
import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Home />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
