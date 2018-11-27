const express = require('express');
const router = express.Router();

const Todo = require("../model/Todo");

router.get("/todos", (req, res) => {
    Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.json(err);
        })
})

router.post("/todos", (req, res) => {
    Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err);

        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
})

router.delete('/todos/:id', (req, res) => {
    Todo.deleteOne({
        _id : req.params.id
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
})

router.post('/update/:id', (req, res) => {
    Todo.findById(req.params.id, function(err, todo) {
        todo.done = !todo.done
        todo.save(function (err){
            if (err) {
                res.send(err)
                console.log(err)
            }
            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        })
        
    });
})

module.exports = router