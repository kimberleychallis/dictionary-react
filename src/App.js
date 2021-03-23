import logo from "./logo.svg";
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
                  <a href="#">source code</a>
                </li>
                <li>
                  <a href="#">inspired by</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main className="App-body">
          <h2>what would you like to understand?</h2>
          <form>
            <input type="text" placeholder="" />
            <input type="submit" value="search" />
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
