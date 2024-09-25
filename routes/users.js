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
router.put('/:id', async (req, res) => {
    let result = await User.update(req.body, {where: {id: req.params.id}})
    res.json(result)
})
router.delete('/:id', async (req, res) => {
    let result = await User.destroy({where: {id: req.params.id}})
    res.json(result)
})
module.exports = router