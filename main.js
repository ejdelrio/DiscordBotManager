"use strict";

const express = require("express");
const debug = require("debug")("DiscordBotManager : main.js");
const PORT = process.env.PORT || 4000;
const app = new express();

function example(a, b, c)
{

}

app.listen(PORT, () =>
{
  debug("SERVER ACTIVE ON PORT : ", PORT);
}); 