"use strict";

const debug = require("debug")("DiscordBotClient : TenantInstanceTableEntity.js");
const BotManagerTableEntity = require("./BotManagerTableEntity");

// Private variable values;
var tenantName;
var tenantId;

class TenantInstanceTableEntity extends BotManagerTableEntity
{
  constructor (id)
  {
    super(id);
  }
  static ParseFromDataBaseQuery(data)
  {
    var log = debug.extend(TenantInstanceTableEntity.ParseFromDataBaseQuery.name);
    var instance;

    return instance;
  }

  get TenantName()
  {
    return tenantName;
  }

  set TenantName(name)
  {
    var log = debug.extend(`set TenantName(${ name })`);
    var errorMessage;

    if (name === null || name === undefined)
    {
      errorMessage = "name is either null or undefined";
      log(errorMessage);
      throw new ReferenceError()
    }

    if (!name instanceof String && !typeof name !== "string")
    {
      errorMessage = "name must be an instance of a string";
      log(errorMessage)
      throw new TypeError(errorMessage);
    }

    if (name.length <= 0 || name.length > 30)
    {
      errorMessage = "name must have a length between 1 and 30";
      log(errorMessage)
      throw new RangeError(errorMessage);
    }

    tenantName = name;
  }
}

module.exports = TenantInstanceTableEntity;