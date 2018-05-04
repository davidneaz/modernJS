import axios from "axios";

// Basic promise usage demo

const searchWoeid = "2487956";
const crazyDate = "2018/5/3";

function getWeather(woeid, searchDate) {
  if (!woeid) {
    throw "Location id was not passed";
  }
  if (!searchDate) {
    throw "No date was passed";
  }

  const url = "https://www.metaweather.com/api/location";

  // compose the url
  const niceUrl = encodeURI(`${url}/${woeid}/${searchDate}`);
  console.log(`Calling with url: ${niceUrl}`);

  // .get makes an HTTP GET request with the provided url
  axios
    .get(niceUrl)
    .then(result => {
      console.log("Successful return from get");
      console.dir(result.data);
    })
    .catch(error => {
      console.log("Failed return from get");
      console.log(error);
    });
}

getWeather(searchWoeid, crazyDate);
