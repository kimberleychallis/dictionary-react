import React from "react";
import Synonym from "./Synonym";

const Meaning = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 partOfSpeech">
          <p>{props.resultDetails.partOfSpeech}</p>
        </div>

        <div className="col-md-6 entry">
          {props.resultDetails.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <h4 className="definition">
                  {index + 1}. {definition.definition}
                </h4>
                <Synonym synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>

        <div className="col-md-4 phrases">
          <p className="-small-caps">in use</p>

          {props.resultDetails.definitions.map((definition, index) => {
            if (definition.example) {
              return (
                <p className="example" key={index}>
                  {index + 1}. &ldquo;{definition.example}
                  &rdquo;
                </p>
              );
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Meaning;
