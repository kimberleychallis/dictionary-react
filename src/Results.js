import React from "react";

const Results = (props) => {
  // console.log(props.results);
  if (props.results) {
    return (
      <div className="App-body">
        <div className="container">
          <div className="row align-items-center word">
            <div className="col-8">
              <h3 className="headword">{props.results.word}</h3>
            </div>
            <div className="col-4 text-right">
              <button className="pronunciation">
                <i className="fas fa-volume-up"></i>{" "}
                {/* Need to make the sound clip play, somehow */}
                {props.results.phonetics[0].text}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
