const { Router } = require("express");
const api = Router();
const {
  listAllObjects,
  createObject,
  getObjectById,
  upgradeObject,
  deleteObject,
} = require("./controllers/object-controller");
const {
  listAllPlayers,
  createPlayer,
  getPlayerById,
  armPlayer,
  killPlayer,
} = require("./Controllers/player-controller");
// This was my data source. I move it to separate entities controllers  ////will be your data source

//===================================
//====== Objects entity endpoints
//===================================
// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", listAllObjects);
api.post("/objects", createObject);
api.get("/objects/:id", getObjectById);
api.patch("/objects/:id/upgrade/:newValue", upgradeObject);
api.delete("/objects/:id", deleteObject);

//===================================
//====== Players entity endpoints
//===================================
api.get("/players", listAllPlayers);
api.post("/players", createPlayer);
api.get("/players/:id", getPlayerById);
api.patch("/players/:id/arm/:objectId", armPlayer);
api.patch("/players/:id/kill", killPlayer);

module.exports = api;
