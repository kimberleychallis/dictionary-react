import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("dictionary");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (response) => {
    // Sample API response: https://api.dictionaryapi.dev/api/v2/entries/en_GB/space
    setSearchResults(response.data);
  };

  const search = () => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchTerm}`;
    axios.get(apiUrl).then(handleSearchResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleEntry = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container">
        <div className="App-search">
          <div className="row">
            <div className="col">
              <h2>let me help you in your search for meaning</h2>

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
      <div className="App-body">
        <Results results={searchResults} />
      </div>
    </div>
  );
};

export default Dictionary;
