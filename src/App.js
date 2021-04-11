import Dictionary from "./Dictionary";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <div className="row">
              <div className="col">
                <h1>dictionary.js</h1>
              </div>
              <div className="col menubar">
                <ul>
                  <li>
                    <a href="https://github.com/kimberleychallis/dictionary-react">
                      source code
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kimberleychallis/dictionary-react/blob/master/README.md">
                      about
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
