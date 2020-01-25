import React from "react";
import "./App.css";
import QuoteSearcher from "./components/QuoteSearcher";
import Quote from "./components/Quote";
function App() {
  return (
    <div className="App">
      <h1>
        <QuoteSearcher />
      </h1>
      <h4>
        <Quote
          text="Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind"
          author="Bruce Lee"
        />
        <Quote
          text="Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
          author="Abraham Lincoln"
        />
        <Quote
          text="Good timber does not grow with ease; the stronger the wind, the stronger the trees."
          author="J. Willard Marriott"
        />
      </h4>
    </div>
  );
}

export default App;
