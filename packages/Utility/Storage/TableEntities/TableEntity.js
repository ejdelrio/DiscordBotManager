"use strict";

const debug = require("debug")("DiscordBotManager : TableEntity.js");
const { Model } = require("objection");

class TableEntity extends Model
{
  constructor (id)
  {
    this.id = id;
  }

  ParseFromDataBaseQuery(data)
  {
    throw new Error("Base implementation of ParseFromDataBaseQuery cannot be used");
  }
}

module.exports = TableEntity;