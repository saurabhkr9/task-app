const express = require('express');
const router = new express.Router();
const Task = require('../models/task');


router.post('/tasks' , async (req , res)=>{
    const task = new Task(req.body);
    try{
        await task.save();
        res.status(201).send(task);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/tasks' , async (req , res)=>{
    try{
        const users = await Task.find({});
        res.send(users);
    }catch(e){
        res.status(500).send(err);
    }
})

router.get('/tasks/:id' , async (req , res)=>{
    const _id = req.params.id;
    try{
        const task = await Task.findById(_id);
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }catch(e){
        res.status(500).send();
    }
 });

 router.patch('/tasks/:id' , async (req , res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isAllowed = updates.every(key=> allowedUpdates.includes(key));
    if(!isAllowed){
        return res.status(400).send('Error: Invalid updates!')
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true});
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }catch(e){
        res.status(400).send(e);
    }
 })

 router.delete('/tasks/:id', async (req , res)=>{
    try{
       const task = await Task.findByIdAndDelete(req.params.id)
       if(!task){
           return res.status(404).send();
       }
       res.send(task);
    }catch(e){
       res.status(400).send(e);
    }
})

module.exports = router