import React from "react";

const Synonym = (props) => {
  if (props.synonyms) {
    return (
      <div className="row synonyms">
        <div className="col-2">
          <h5>synonyms</h5>
        </div>
        <div className="col-9">
          <ul>
            {props.synonyms.map((synonym, index) => {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else return null;
};

export default Synonym;
