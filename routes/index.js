const express = require("express")
const indexRouter = express.Router()
const ToysController = require("../controllers/toys-controller")
const toyRouter = require("./toy-router")


indexRouter.get("/", ToysController.homepage)
indexRouter.use("/toys",toyRouter)


module.exports = indexRouter