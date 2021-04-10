import Dictionary from "./Dictionary";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
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

          <Dictionary />
        </div>

        <div className="App-body">
          <div className="container">
            <div className="row align-items-center word">
              <div className="col-10">
                <h3 className="headword">space</h3>
              </div>
              <div className="col-2">
                <button className="pronunciation">
                  <i className="fas fa-volume-up"></i> /speɪs/
                </button>
              </div>
            </div>
          </div>

          {/* ROW */}

          <div className="details">
            <div className="container">
              <div className="row">
                <div className="col-2 partOfSpeech">
                  <p>noun</p>
                </div>
                <div className="col-6 entry">
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
                    2. the dimensions of height, depth, and width within which
                    all things exist and move.
                  </h4>
                  <h4 className="definition">
                    3. an interval of time (often used to suggest that the time
                    is short considering what has happened or been achieved in
                    it)
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
                <div className="col-4 phrases">
                  <p className="-small-caps">example</p>
                  <p className="example">"a table took up much of the space"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="details">
            <div className="container">
              <div className="row">
                <div className="col-2 partOfSpeech">
                  <p>verb</p>
                </div>
                <div className="col-6 entry">
                  <h4 className="definition">
                    1. position (two or more items) at a distance from one
                    another.
                  </h4>

                  <div className="row synonyms">
                    <div className="col-2">
                      <h5>synonyms</h5>
                    </div>
                    <div className="col-9">
                      <ul>
                        <li>place at intervals</li>
                        <li>separate</li>
                        <li>place</li>
                        <li>position</li>
                        <li>arrange</li>
                        <li>line up</li>
                        <li>range</li>
                        <li>order</li>
                        <li>array</li>
                        <li>dispose</li>
                        <li>deploy</li>
                        <li>locate</li>
                        <li>settle</li>
                        <li>situate</li>
                        <li>set</li>
                        <li>stand</li>
                        <li>lay out</li>
                        <li>station</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4 phrases">
                  <p className="-small-caps">example</p>
                  <p className="example">"the poles are spaced 3m apart"</p>
                </div>
              </div>
            </div>
          </div>

          {/* APP WRAPPERS */}
        </div>
      </div>
    </div>
  );
}

export default App;
