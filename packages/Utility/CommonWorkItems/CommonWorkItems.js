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

  static ValidateType(obj, expectedType)
  {
    var log = debug(CommonWorkItems.ValidateType.name);
    var errorMessage;

    if (obj === null)
    {
      return;
    }

    CommonWorkItems.ValidateIsNotNull(expectedType);

    if (expectedType === String)
    {
      if (!obj instanceof expectedType && typeof obj !== "string")
      {
        errorMessage = "Expected object instance to be a string.";
        log(errorMessage);
        throw new TypeError(errorMessage);
      }

      return;
    }

    if (expectedType === Array)
    {
      if (!obj instanceof Array && !Array.isArray(obj))
      {
        errorMessage = "Expected object to be instance of an array.";
        log(errorMessage);
        throw new TypeError(errorMessage);
      }

      return;
    }

    if (!obj instanceof expectedType)
    {
      errorMessage = `Expected object to be instance of ${ expectedType.prototype.name }`;
      log(errorMessage);
      throw new TypeError(errorMessage);
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
    CommonWorkItems.ValidateType(str, String);

    if (str === null || str.length === 0)
    {
      return true;
    }

    return false;
  }

  static RemovePadding(str)
  {
    var formattedString;
    var startOfString;
    var endOfString;

    if (CommonWorkItems.IsNullOrEmpty(str))
    {
      return str;
    }

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

    return formattedString;
  }
}

modules.exports = CommonWorkItems;