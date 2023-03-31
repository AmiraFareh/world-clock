function updateTime() {
  let currentTimeElement = document.querySelector("#current-time");
  let currentTime = moment();
  let currentTimeZone = moment.tz.guess();
  let currentTimeZoneElement = document.querySelector("#current-timezone");
  currentTimeElement.innerHTML = currentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  currentTimeZoneElement.innerHTML = currentTimeZone;
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");
    aucklandDateElement.innerHTML = aucklandTime.format("dddd, Do MMMM YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let cityDate = moment().tz(cityTimeZone).format("dddd, Do MMMM YYYY");
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city"">
          <div>
            <h3>${cityName}</h3>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
