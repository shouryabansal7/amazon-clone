import Home from "./Home";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    //BEM Convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
