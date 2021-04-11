import React from "react";

const Meaning = (props) => {
  // console.log(props.resultDetails);

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

                  <div className="row synonyms">
                    <div className="col-2">
                      <h5>synonyms</h5>
                    </div>
                    <div className="col-9">
                      <ul>
                        <li>slot</li>
                        <li>arena</li>
                        <li>capacity</li>
                        <li>zone</li>
                        <li>area</li>
                        <li>field</li>
                        <li>location</li>
                        <li>territory</li>
                        <li>area</li>
                        <li>field</li>
                        <li>location</li>
                        <li>territory</li>
                      </ul>
                    </div>
                  </div>
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
