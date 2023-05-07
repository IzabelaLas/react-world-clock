import "./styles/App.css";
import CitiesDisplayed from "./components/displayedCities/CitiesDisplayed.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>World clock</h1>
        <CitiesDisplayed />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
