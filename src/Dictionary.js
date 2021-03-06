import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("dictionary");
  const [dictionarySearchResults, setDictionarySearchResults] = useState(null);
  const [pexelsSearchResults, setPexelsSearchResults] = useState(null);

  const handleDictionarySearchResults = (response) => {
    setDictionarySearchResults(response.data);
  };

  const handlePexelsSearchResults = (response) => {
    setPexelsSearchResults(response.data.photos);
  };

  const search = () => {
    const pexelsAPIKey = `563492ad6f9170000100000141ddc25c945d476e8e2f1bac04658ba0`;
    const pexelsAPIURL = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=4`;

    const dictionaryAPIURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchTerm}`;

    axios
      .get(pexelsAPIURL, {
        headers: { Authorization: `Bearer ${pexelsAPIKey}` },
      })
      .then(handlePexelsSearchResults);

    axios.get(dictionaryAPIURL).then(handleDictionarySearchResults);
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
              <h2 id="seek-and-ye-shall-find">seek, and ye shall find</h2>

              <form className="Search" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a word"
                    aria-label="Word search"
                    aria-describedby="seek-and-ye-shall-find"
                    onChange={handleEntry}
                    autoFocus
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
        <Results results={dictionarySearchResults} />
      </div>
      <div className="container">
        <Photos results={pexelsSearchResults} />
      </div>
    </div>
  );
};

export default Dictionary;
