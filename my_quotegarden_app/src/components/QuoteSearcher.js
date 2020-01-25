import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson);
        const treeQuotes = myJson.results;
        console.log(treeQuotes);
        this.setState({
          quotes: treeQuotes
        });
      });
  }

  render() {
    // const testQuote = this.state.quotes.map(function(quote) {
    //   return quote.quoteAuthor;
    // });
    // console.log(testQuote);

    return (
      <div>
        <h1> Quotes </h1>
        <ul>
          {this.state.quotes.map(quote => (
            <Quote
              text={quote.quoteText}
              author={quote.quoteAuthor}
              key={quote._id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
