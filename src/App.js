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
            <div className="row word">
              <div className="col">
                <h3 className="headword">space</h3>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="container">
              <div className="row">
                <div className="col-2 word-type">
                  <p>noun</p>
                </div>
                <div className="col-5 entry">
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
                </div>
                <div className="col-5 phrases">
                  <p className="-small-caps">example</p>
                  <p className="example">"a table took up much of the space"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
