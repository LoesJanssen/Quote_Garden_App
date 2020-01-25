import React from "react";
import "./App.css";
import QuoteSearcher from "./components/QuoteSearcher";
import Quote from "./components/Quote";
function App() {
  return (
    <div className="App">
      <h6>
        <QuoteSearcher />
      </h6>
      <Quote />
    </div>
  );
}

export default App;
