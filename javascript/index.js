function UpdateTime() {
  let currentTimeElement = document.querySelector("#current-time");
  let currentTime = moment();
  currentTimeElement.innerHTML = currentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");
  aucklandDateElement.innerHTML = aucklandTime.format("dddd, Do MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

UpdateTime();
setInterval(UpdateTime, 1000);
