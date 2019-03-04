"use strict";

const debug = require("debug")("DiscordBotClient : BotManagerEntity.js");
const TableEntity = require("./TableEntity");

class BotManagerTableEntityBase extends TableEntity
{
  constructor (id)
  {
    super(id);
  }
}

module.exports = BotManagerTableEntityBase;