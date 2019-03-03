"use strict";

const express = require("express");
const debug = require("debug")("DiscordBotManager : main.js");
const PORT = process.env.PORT || 4000;
const app = new express();

app.listen(PORT, () =>
{
  let log = debug.extend("app.listen");
  log("SERVER ACTIVE ON PORT : ", PORT);
}); 