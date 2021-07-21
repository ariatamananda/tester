const { Toy } = require("../models/index")

class ToysController {
    static homepage (req,res){
        Toy.findAll()
        .then(function(result){
            res.render("homepage", {toy: result} )
        })
        .catch(function(err){
            res.send(err)
        })
    }

    static addForm(req,res){
        res.render("add-form")
    }

    static addToy(req,res){
        let newToy = {
            name: req.body.name,
            country: req.body.country,
            brand: req.body.brand,
            quantity:  req.body.quantity,
            picture: req.body.picture
        }
        Toy.create(newToy)
        .then(function(result){
            console.log(result)
            res.redirect("/")
        })
        .catch(function(err){
            res.send(err)
        })
    }

    static editForm(req,res){
        let toyId = req.params.toyId

        Toy.findByPk(toyId)
        .then(function(result){
            res.render("edit-form", {toy: result} )
        })
        .catch(function(err){
            res.send(err)
        })
    }

    static updateToy(req,res){
        let updateToy = {
            name: req.body.name,
            country: req.body.country,
            brand: req.body.brand,
            quantity: req.body.quantity,
            picture: req.body.picture
        }

        let toyId = req.params.toyId

        Toy.update(updateToy, {
            where: {
                id: toyId
            }
        })
        .then(function(result){
            res.redirect("/")
        })
        .catch(function(err){
            res.send(err)
        })
    }

    static deleteToy (req,res){
        let toyId = req.params.toyId
        
        Toy.destroy({
            where: {
                id: toyId
            }
        })
        .then(function(result){
            res.redirect("/")
        })
        .catch(function(err){
            res.send(err)
        })
    }
}

module.exports = ToysController