import React from "react";

/* looping through elements simple example 

let elements = [
  {
    name: "one",
    value: 1,
  },
  {
    name: "two",
    value: 2,
  },
  {
    name: "three",
    value: 3,
  },
];
return (
  <ul>
    {elements.map(function (element, index) {
      return (
        <li key={index}>
          The value for {element.name} is {element.value}
        </li>
      );
    })}
  </ul>
);
*/

export default function ResponseHandling(props) {
  if (props.results) {
    return (
      <div className="ResponseHandling">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>Definition: {meaning.definition}</p>
              <p>
                <em>{meaning.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
