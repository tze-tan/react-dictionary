import React, { useState } from "react";
import axios from "axios";
import ResponseHandling from "./ResponseHandling";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  /* sets the search term based on user input value */
  function handleSearchTerm(event) {
    setKeyword(event.target.value);
  }

  /* searches for the keyword via shecodes dictionary API */
  function Search(event) {
    event.preventDefault();
    let key = "4916caba061520co8b34c1aft75528fb";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(url).then(displayDefinition);
  }

  /* display the result */
  function displayDefinition(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <h1 className="pt-5">Dictionary </h1>
      <h2 className="p-3">Which word would you like to look up?</h2>
      <section>
        <form onSubmit={Search}>
          <input
            type="search"
            onChange={handleSearchTerm}
            placeholder="Examples: wine, country, school, food"
          />
        </form>
      </section>
      <ResponseHandling results={results} />
    </div>
  );
}
