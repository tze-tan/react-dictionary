import React, { useState } from "react";
import axios from "axios";
import ResponseHandling from "./ResponseHandling";

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
    console.log(response.data);
    setResults(response.data);
  }

  return (
    <div className="dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleSearchTerm} />
      </form>

      <ResponseHandling results={results} />
    </div>
  );
}
