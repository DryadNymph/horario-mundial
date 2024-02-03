setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesDateElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[(<small>]A[</small>)]"
  );
}, 1000);
setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyDateElement.innerHTML = sydneyTime.format(
    "h:mm:ss[(<small>]A[</small>)]"
  );
}, 1000);
