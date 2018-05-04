import axios from "axios";

const url = "https://wordsapiv1.p.mashape.com/words/flatulence";

const result = axios.get(url);
console.log(result);
