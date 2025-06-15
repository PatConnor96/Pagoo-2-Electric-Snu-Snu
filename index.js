import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/topCountries", (req, res) => {
    res.render("topCountries.ejs");
  });

app.get("/topCities", (req, res) => {
    res.render("topCities.ejs");
  });


  app.post("/countryCheck", (req, res) => {
    const country = req.body.country;
    res.render("countryCheck.ejs", { country: country });
  });
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});