import React from "react";
import moment from "moment-timezone";

export default function WarsawTime() {
  const warsawDate = moment().tz("Europe/Warsaw").format("dddd, MMMM Do YYYY");
  const warsawTime = moment().tz("Europe/Warsaw").format("LTS");

  return (
    <div id="firstCityDisplayed">
      <div className="citiesDisplayed" id="warsaw">
        <div className="CityAndDate">
          <h2 className="city">Warsaw</h2>
          <div className="date">{warsawDate}</div>
        </div>
        <div className="time">{warsawTime}</div>
      </div>
    </div>
  );
}
