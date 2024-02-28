const router = require("express").Router();
const NodeGeocoder = require("node-geocoder");
const turf = require("@turf/turf");

const polygons = require("../data/polygons.json");
const controllers = require("../controllers/addressControllers")

router.post("/area", controllers.searchArea)

router.post("/city", controllers.searchAddress)

module.exports = router;