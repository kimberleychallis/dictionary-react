import React from "react";

const Meaning = (props) => {
  console.log(props.resultDetails);
  // return "Meaning component";

  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-2 partOfSpeech">
            <p>{props.resultDetails.partOfSpeech}</p>
          </div>
          <div className="col col-md-6 entry">
            {/* BEGINNING OF A DEFINITION */}

            {props.resultDetails.definitions.map((definition, index) => {
              return (
                <div key={index}>
                  <h4 className="definition">
                    {index + 1}. {definition.definition}
                  </h4>
                </div>
              );
            })}

            {/* <div className="row synonyms">
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
              }
            </div>
          </div>
          <div className="col col-md-4 phrases">
            <p className="-small-caps">example</p>
            <p className="example">
              &ldquo;
              {props.resultDetails.definitions[0].example}
              &rdquo;
            </p>
          </div> */}

            {/* SYNONYMS */}

            {/* <div className="row synonyms">
            <div className="col-2">
              <h5>synonyms</h5>
            </div>
            <div className="col-9">
              <ul>
                <li>period</li>
                <li>span</li>
                <li>time</li>
                <li>duration</li>
                <li>stretch</li>
                <li>course</li>
                <li>interval</li>
                <li>season</li>
                <li>term</li>
              </ul>
            </div>
          </div> */}

            {/* END OF SYNONYMS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meaning;
