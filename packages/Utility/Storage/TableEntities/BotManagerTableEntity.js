"use strict";

const debug = require("debug")("DiscordBotClient : BotManagerEntity.js");
const TableEntity = require("./TableEntity");

class BotManagerTableEntity extends TableEntity
{
  constructor (id)
  {
    super(id);
  }
}

module.exports = BotManagerTableEntity;