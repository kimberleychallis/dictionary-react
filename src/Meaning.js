import React from "react";

const Meaning = (props) => {
  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-2 partOfSpeech">
            <p>noun</p>
          </div>
          <div className="col col-md-6 entry">
            <h4 className="definition">
              1. a continuous area or expanse which is free, available or
              unoccupied
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
            <h4 className="definition">
              2. the dimensions of height, depth, and width within which all
              things exist and move.
            </h4>
            <h4 className="definition">
              3. an interval of time (often used to suggest that the time is
              short considering what has happened or been achieved in it)
            </h4>

            <div className="row synonyms">
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
            </div>
          </div>
          <div className="col col-md-4 phrases">
            <p className="-small-caps">example</p>
            <p className="example">"a table took up much of the space"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meaning;
