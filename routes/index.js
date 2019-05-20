var express = require("express");
var router = express.Router();
var axios = require("axios");

const API_KEY = "";
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express weather app" });
});

router.post("/", function(req, res, next) {
  const city = req.body.city;
  console.log(city);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  axios
    .get(URL)
    .then(function(response) {
      // console.log(response);
      const temp = response.data.main.temp;
      res.render("index", {
        message: `The temperature in ${city} is ${temp} degrees`,
        title: "Express weather app"
      });
    })
    .catch(function(error) {
      console.log(error);
      res.render("index", {
        message: `Error in fetching details for ${city}`,
        title: "Express weather app"
      });
    });
});

module.exports = router;
