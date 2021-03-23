import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-3">
              <h1>dictionary.js</h1>
            </div>
            <div className="col-9 menubar">
              <ul>
                <li>
                  <a href="https://github.com/kimberleychallis/dictionary-react">
                    source code
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kimberleychallis/dictionary-react">
                    about
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="App-search">
          <div className="row">
            <div className="col-9">
              <h2>what would you like to understand?</h2>
              <form className="Search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a word"
                    aria-label="Word search"
                    aria-describedby="button-addon2"
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
        <div className="App-body">
          <div className="row word">
            <div className="col">
              <h3>space</h3>
            </div>
          </div>

          <div className="details">
            <div className="row">
              <div className="col-2 word-type">
                <p>noun</p>
              </div>
              <div className="col-5 definition">
                <h4>
                  1. a continuous area or expance which is free, available or
                  unoccupied
                </h4>
                <p>"a table took up much of the space"</p>
                <div className="row synonyms">
                  <div className="col-3">
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
              <div className="col-5 phrases">
                <p>phrases</p>
                <p>watch this space</p>
                <p>
                  (informal) 'the results of the competition have still to come
                  through -- watch this space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
