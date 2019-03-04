"use strict";

const debug = require("debug")("DiscordBotManager");

class CommonWorkItems
{

  static ValidateIsNotNull(obj, parameterName = null)
  {
    var log = debug.extend(CommonWorkItems.ValidateIsNotNull.name);
    var errorMessage;

    if (obj === null || obj === undefined)
    {
      errorMessage = `The value of ${ parameterName } is null or undefined`;
      log(errorMessage);
      throw new ReferenceError(errorMessage);
    }
  }

  static IsNullOrWhiteSpace(str)
  {
    var log = debug.extend(CommonWorkItems.IsNullOrWhiteSpace.name);
    log("Beginning");

    if (CommonWorkItems.IsNullOrEmpty(str))
    {
      return true;
    }

    for (let i = 0; i < str.length; i++)
    {
      if (str[ i ] != " ")
      {
        return false;
      }
    }

    return true;
  }
  static IsNullOrEmpty(str)
  {
    var log = debug.extend(CommonWorkItems.IsNullOrEmpty.name);
    log("Begining");

    if (str === null || str.length === 0)
    {
      log("Exiting");
      return true;
    }

    log("Exiting");
    return false;
  }

  static RemovePadding(str)
  {
    var log;
    var formattedString;
    var startOfString;
    var endOfString;

    if (CommonWorkItems.IsNullOrEmpty(str))
    {
      return "";
    }

    log = debug.extend(CommonWorkItems.RemovePadding.name);
    log("Beginning");
    log.arguments(str);
    formattedString = new String();

    for (startOfString = 0; i < str.length; startOfString++)
    {
      if (str[ startOfString ] != " ")
      {
        break;
      }
    }

    for (endOfString = str.length - 1; endOfString >= 0; endOfString--)
    {
      if (str[ endOfString ] != " ")
      {
        break;
      }
    }

    while (startOfString <= endOfString)
    {
      formattedString += str[ startOfString ];
      startOfString++;
    }

    log("Ending");
    return formattedString;
  }
}

modules.exports = CommonWorkItems;