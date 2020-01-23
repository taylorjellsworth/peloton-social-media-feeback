// 'use strict';
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const Twitter = require("twitter");
const snoowrap = require("snoowrap");

dotenv.config();
const app = express();
app.use(bodyParser.json());

const port = 5000;

app.listen(port, () => console.log(`server started on part ${port}`));

//Twitter credentials
const clientTwitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  userAgent: process.env.USER_AGENT
});

//Reddit credentials
const clientReddit = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
});

app.post("/twitterApiSearch", function(req, res) {
  seachParameter = req.body.seachParam;
  app.get("/twitter", (req, res) => {
    var searchParam = { q: seachParameter, count: 10 };
    clientTwitter.get("search/tweets", searchParam, function(error, tweets, response) {
      res.json(tweets);
    });
  });
});

app.post("/redditApiSearch", function(req, res) {
  seachParameter = req.body.searchParam;
  app.get("/reddit", (req, res) => {
    var searchParam = { query: seachParameter };
    clientReddit
      .getSubreddit("pelotoncycle")
      .search(searchParam)
      .then(posts => res.json(posts));
  });
});
