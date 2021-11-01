const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const Note = require('../models/note');

const router = express.Router();

router.post('/', verifyToken, async (req, res)=>{
    try {
        req.body.createdBy = req.user.user_id;
        const response = await Note.create(req.body);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.get('/', verifyToken, async (req, res)=>{
    try {
        const response = await Note.find({createdBy: req.user.user_id}).populate('createdBy', '_id email firstname lastname');
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.get('/:id', verifyToken, async (req, res)=>{
    try {
        const response = await Note.findOne({_id: req.params.id});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/:id', verifyToken, async (req, res)=>{
    try {
        const response = await Note.findByIdAndDelete(req.params.id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

router.put('/:id', verifyToken, async (req, res)=>{
    try {
        const response = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})



module.exports = router;