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

          {/* ROW */}

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
