import React, { useState } from "react";
import axios from "axios";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = (response) => {
    console.log(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchTerm}`;
    axios.get(apiUrl).then(search);
  };

  const handleEntry = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="App-search">
        <div className="row">
          <div className="col">
            <h2>what would you like to know?</h2>
            <form className="Search" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a word"
                  aria-label="Word search"
                  aria-describedby="button-addon2"
                  onChange={handleEntry}
                  required
                />
                <div className="input-group-append">
                  <button className="btn" type="submit">
                    search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
