const router = require('express').Router();


function slashWalaFunction(req, res) {
    // console.log(req)
    return res.send(req.originalUrl);
  }

router.get("/insertUser", slashWalaFunction);
router.get("/getUsers", slashWalaFunction);
router.get("/getSingleUser", slashWalaFunction)
router.get("/updateUser", slashWalaFunction)

module.exports = router;