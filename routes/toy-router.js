const express = require("express")
const ToysController = require("../controllers/toys-controller")
const toyRouter = express.Router()

toyRouter.get("/add", ToysController.addForm)
toyRouter.post("/add", ToysController.addToy)
toyRouter.get("/edit/:toyId", ToysController.editForm)
toyRouter.post("/edit/:toyId", ToysController.updateToy)
toyRouter.get("/delete/:toyId", ToysController.deleteToy)

module.exports = toyRouter