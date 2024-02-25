import React from "react";
import Synonyms from "./Synonyms";
import "./ResponseHandling.css";

export default function ResponseHandling(props) {
  if (props.results) {
    return (
      <div className="ResponseHandling">
        <section>
          <h2>{props.results.word}</h2>
          <p>{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                <strong>Definition:</strong> {meaning.definition}
              </p>
              <p>
                <em>{meaning.example}</em>
              </p>
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

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
