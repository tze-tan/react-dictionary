import React from "react";
import Synonyms from "./Synonyms";
import "./ResponseHandling.css";

export default function ResponseHandling(props) {
  if (props.results) {
    return (
      <div className="ResponseHandling">
        <div className="word-and-phonetic">
          <span className="word">{props.results.word}</span>
          <span className="phonetic">{props.results.phonetic}</span>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <div className="definition">{meaning.definition}</div>
              <div className="example">{meaning.example}</div>
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
