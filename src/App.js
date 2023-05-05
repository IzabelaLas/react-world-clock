import "./App.css";
import CitiesDisplayed from "./CitiesDisplayed";
import Footer from "./Footer";
import Select from "./Select";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>World clock</h1>
        <Select />
        <CitiesDisplayed />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
