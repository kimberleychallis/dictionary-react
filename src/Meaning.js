import React from "react";
import Synonym from "./Synonym";

const Meaning = (props) => {
  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-2 partOfSpeech">
            <p>{props.resultDetails.partOfSpeech}</p>
          </div>

          {/* BEGINNING OF A DEFINITION */}

          <div className="col-6 entry">
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

          <div className="col col-md-4 phrases">
            <p className="-small-caps">in use</p>

            {/* EXAMPLE PHRASES */}

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

            {/* END EXAMPLE PHRASES */}
          </div>

          {/* END OF MAPPING */}
        </div>
      </div>
    </div>
  );
};

export default Meaning;
