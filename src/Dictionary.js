import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function wordSearch(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleSearchTerm(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={wordSearch}>
        <input type="search" onChange={handleSearchTerm} />
      </form>
    </div>
  );
}
