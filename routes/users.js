const express = require('express')
const router = express.Router()
const {Fruit, User} = require('../models/index')
const {check, validationResult} = require('express-validator')
router.get('/', async (req, res) => {
    let result = await User.findAll()
    res.json(result)
})
router.get('/:id', async (req, res) => {
    let result = await User.findByPk(req.params.id)
    res.json(result)
})
router.post('/', async (req, res) => {
    let result = await User.create(req.body)
    res.json(result)
})
router.put('/:id',[
    check("name").not().isEmpty().trim(),
    check("name").isLength({min: 2, max: 20}),
    check("age").not().isEmpty().trim()], async (req, res) => {
        const errors = validationResult(req);
        // If there are any errors, return the errors in the response
        if(!errors.isEmpty()){
            res.json({error: errors.array()})
        }
        else {
    let result = await User.update(req.body, {where: {id: req.params.id}})
    res.json(result)
}})
router.delete('/:id', async (req, res) => {
    let result = await User.destroy({where: {id: req.params.id}})
    res.json(result)
})
module.exports = router