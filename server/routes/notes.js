const express = require('express');
const Note = require('../models/note');

const router = express.Router();

router.post('/', async (req, res)=>{
    try {
        const response = await Note.create(req.body);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.get('/', async (req, res)=>{
    try {
        const response = await Note.find();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const response = await Note.findOne({_id: req.params.id});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const response = await Note.findByIdAndDelete(req.params.id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const response = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})



module.exports = router;