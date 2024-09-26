const express = require('express')
const routerF = express.Router()
const {Fruit, User} = require('../models/index')
const {check, validationResult} = require('express-validator')
routerF.get('/', async (req, res) => {
    let result = await Fruit.findAll()
    res.json(result)
})
routerF.get('/:id', async (req, res) => {
    let result = await Fruit.findByPk(req.params.id)
    res.json(result)
})
routerF.post('/',[
    check("name").not().isEmpty().trim(),
    check("name").isLength({min: 2, max: 20}),
    check("color").not().isEmpty().trim()], async (req, res) => {
        const errors = validationResult(req);
        // If there are any errors, return the errors in the response
        if(!errors.isEmpty()){
            res.json({error: errors.array()})
        }
        else {
        let result = await Fruit.create(req.body)
    res.json(result)
}})
routerF.put('/:id',[
    check("name").not().isEmpty().trim(),
    check("name").isLength({min: 2, max: 20}),
    check("color").not().isEmpty().trim()], async (req, res) => {
        const errors = validationResult(req);
        // If there are any errors, return the errors in the response
        if(!errors.isEmpty()){
            res.json({error: errors.array()})
        }
        else {
    let result = await Fruit.update(req.body, {where: {id: req.params.id}})
    res.json(result)
}})
routerF.delete('/:id', async (req, res) => {
    let result = await Fruit.destroy({where: {id: req.params.id}})
    res.json(result)
})
module.exports = routerF