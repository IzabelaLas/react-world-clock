export default function CitiesDisplayed() {
  return (
    <div>
      <div id="firstCityDisplayed">
        <div className="citiesDisplayed" id="warsaw">
          <div className="CityAndDate">
            <h2 className="city">Warsaw</h2>
            <div className="date">May 5th, 2023</div>
          </div>
          <div className="time">12:20:02 PM</div>
        </div>
      </div>
      <div className="citiesDisplayed" id="dubai">
        <div className="CityAndDate">
          <h2 className="city">Dubai</h2>
          <div className="date">May 5th, 2023</div>
        </div>

        <div className="time">12:20:02 PM</div>
      </div>
      <div className="citiesDisplayed" id="vancouver">
        <div className="CityAndDate">
          <h2 className="city">Vancouver</h2>
          <div className="date">May 5th, 2023</div>
        </div>

        <div className="time">12:20:02 PM</div>
      </div>
    </div>
  );
}
