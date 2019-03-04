"use strict";

// npm dependancies
const debug = require("debug")("DiscordBotClient : TenantInstanceTableEntity.js");

// Custom build dependancies
const BotManagerTableEntity = require("./BotManagerTableEntityBase");
const { ValidateIsNotNull, ValidateType } = require("../../CommonWorkItems/CommonWorkItems");

// Private variable values;
var tenantName;
var tenantId;

class TenantTableEntity extends BotManagerTableEntity
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

    ValidateIsNotNull(name, "name");
    ValidateType(name, String);

    if (name.length <= 0 || name.length > 30)
    {
      errorMessage = "name must have a length between 1 and 30";
      log(errorMessage)
      throw new RangeError(errorMessage);
    }

    tenantName = name;
  }
}

module.exports = TenantTableEntity;