import Home from "./Home";
import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
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
