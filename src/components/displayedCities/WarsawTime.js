import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function WarsawTime() {
  const [warsawDate, setWarsawDate] = useState(null);
  const [warsawTime, setWarsawTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWarsawDate(moment().tz("Europe/Warsaw").format("dddd, MMMM Do YYYY"));
      setWarsawTime(moment().tz("Europe/Warsaw").format("LTS"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="firstCityDisplayed">
      <div className="citiesDisplayed" id="warsaw">
        <div className="CityAndDate">
          <h2 className="city">Warsaw</h2>
          <div className="date">{warsawDate}</div>
        </div>
        <div className="time d-flex">
          <div>{warsawTime?.split(" ")[0]}</div>
          <div>{warsawTime?.split(" ")[1]}</div>
        </div>
      </div>
    </div>
  );
}
