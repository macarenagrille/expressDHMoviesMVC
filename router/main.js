const express = require("express")
const router = express.Router()
const controladorMain = require("../controllers/mainController")

router.get("/",controladorMain.index)
router.get("/creditos",controladorMain.credits)
router.get("*",controladorMain.error)

module.exports = router
