"use strict";

const debug = require("debug")("DiscordBotManager : Storage.js");
const Tables = require("./Tables");

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
    var errorMessage;

    if (tableInstance === null || tableInstance === undefined)
    {
      errorMessage = "instance of Tables class is null or undefined";
      log(errorMessage);
      throw new ReferenceError(errorMessage);
    }

    if (!tableInstance instanceof Tables)
    {
      errorMessage = "Must be inherit from the class defined in Tabkes.js";
      log(errorMessage);
      throw new TypeError(errorMessage);
    }

    log("Table value successfully updated");
    tablesValue = tableInstance;
  }
}

module.exports = Storage;