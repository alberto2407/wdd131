document.addEventListener("DOMContentLoaded", function () {
    // Static data
    const temperature = 12; // Temperature in °C
    const windSpeed = 7;    // Wind speed in km/h

    // FUNCTION TO CALCULATE WIND CHILL
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // FUNCTION TO VERIFY CONDITIONS
    function isWindChillApplicable(temp, wind) {
        return temp <= 10 && wind > 4.8;
    }

    // CREATE ELEMENT FOR WIND CHILL (as a list item) IN THE HTML
    // Create the <li> element for Wind Chill
    const windChillItem = document.createElement("li");
    
    // Create the span for the label
    const windChillLabel = document.createElement("span");
    windChillLabel.className = "label";
    windChillLabel.textContent = "Wind Chill:";
    
    // Create the span for the value
    const windChillValue = document.createElement("span");
    if (isWindChillApplicable(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        windChillValue.textContent = `${windChill} °C`;
    } else {
        windChillValue.textContent = "N/A";
    }

    // Append the spans to the <li>
    windChillItem.appendChild(windChillLabel);
    windChillItem.appendChild(windChillValue);

    // Append the <li> to the weather info list
    document.querySelector(".weather .info-list").appendChild(windChillItem);
});