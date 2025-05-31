// Example static values in °F and mph
const tempF = 30;
const speedMph = 10;
const conditions = 'Partly Cloudy'

// Convert to metric
const tempC = (tempF - 32) * (5 / 9);
const speedKph = speedMph * 1.60934;

// Wind chill formulas
function calculateWindChillF(t, v) {
    return (t <= 50 && v > 3)
        ? Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16))
        : "N/A";
}

function calculateWindChillC(t, v) {
    return (t <= 10 && v > 4.8)
        ? Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16))
        : "N/A";
}

// Detect user's location
const userLocale = Intl.DateTimeFormat().resolvedOptions().locale;
const isUS = userLocale.startsWith("en-US");

// Use appropriate units and values
const temp = isUS ? tempF : Math.round(tempC);
const speed = isUS ? speedMph : Math.round(speedKph);
const unitTemp = isUS ? "°F" : "°C";
const unitSpeed = isUS ? "mph" : "km/h";

const windChill = isUS
    ? calculateWindChillF(tempF, speedMph)
    : calculateWindChillC(tempC, speedKph);

// Update HTML
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Temp").textContent = `${temp} ${unitTemp}`;
    document.getElementById("Cond").textContent = `${conditions}`;
    document.getElementById("Speed").textContent = `${speed} ${unitSpeed}`;
    document.getElementById("Chill").textContent = (windChill !== "N/A") ? `${windChill} ${unitTemp}` : "N/A";
});