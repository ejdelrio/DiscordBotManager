"use strict";

const debug = require("debug")("DiscordBotManager : Storage.js");
const Tables = require("./Tables");
const { ValidateType } = require("../CommonWorkItems/CommonWorkItems");

// private members
var tablesValue;

class Storage
{
  static get Tables()
  {
    return tablesValue;
  }

  static set Tables(tableInstance)
  {
    var log = debug.extend("set Tables(tableInstance)");
    ValidateType(tableInstance, Tables);

    log("Table value successfully updated");
    tablesValue = tableInstance;
  }
}

module.exports = Storage;