import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function VancouverTime() {
  const [vancouverDate, setVancouverDate] = useState(false);
  const [vancouverTime, setVancouverime] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVancouverDate(
        moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY")
      );
      setVancouverime(moment().tz("America/Vancouver").format("LTS"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="firstCityDisplayed">
      <div className="citiesDisplayed" id="warsaw">
        <div className="CityAndDate">
          <h2 className="city">Vancouver</h2>
          <div className="date">{vancouverDate}</div>
        </div>
        <div className="time">{vancouverTime}</div>
      </div>
    </div>
  );
}
