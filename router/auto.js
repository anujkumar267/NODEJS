const { insertAuto, slashWalaFunction } = require('../controller/auto');

const router = require('express').Router();




router.get("/insertAuto", insertAuto);
router.get("/getAutos", slashWalaFunction);
router.get("/getSingleAuto", slashWalaFunction)
router.get("/updateAuto", slashWalaFunction)

module.exports = router;