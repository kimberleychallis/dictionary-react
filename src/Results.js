import React from "react";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row align-items-center word">
              <div className="col-8">
                <h3 className="headword">{props.results[0].word}</h3>
              </div>
              <div className="col-4 text-right">
                <a
                  href={props.results[0].phonetics[0].audio}
                  className="pronunciation"
                >
                  <i className="fas fa-volume-up"></i>{" "}
                  {props.results[0].phonetics[0].text}
                </a>
              </div>
            </div>
          </div>
        </div>
        {props.results[0].meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning resultDetails={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
