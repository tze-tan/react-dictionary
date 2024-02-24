import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSearchTerm(event) {
    setKeyword(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
    let key = "4916caba061520co8b34c1aft75528fb";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(url).then(displayDefinition);
  }

  function displayDefinition(response) {
    console.log(response.data);
  }

  return (
    <div className="dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleSearchTerm} />
      </form>
    </div>
  );
}
