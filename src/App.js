import "./App.css";
import Search from "./Search.js";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Weather />
      </header>
    </div>
  );
}

export default App;
