import "./styles/App.css";
import CitiesDisplayed from "./components/displayedCities/CitiesDisplayed.js";
import Footer from "./components/Footer.js";
import Select from "./components/Select.js";
import moment from "moment-timezone";

function App() {
  console.log(moment().tz("Europe/Warsaw").format("HH:mm:ss"));
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
