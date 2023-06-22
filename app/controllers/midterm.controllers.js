//db connection and all other heavy-liftings
const Student = require('../models/midterm.models');

exports.create = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            'message': "name cannot be empty"
        }); 
    }
    if(!req.body.major){
        return res.status(400).send({
            'message': "major cannot be empty"
        }); 
    }
    if(!req.body.age){
        return res.status(400).send({
            'message': "age cannot be empty"
        }); 
    }
    const student = new Student({ //using lower case student here will cause error
        name : req.body.name,
        age: req.body.age,
        major: req.body.major
    })
    student.save() 
    .then(data => res.send(data))
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            'error' : error
        })
    })
}

exports.findAll = (req,res) => { //find is a default function of mongoDB
    Student.find()
    .then(students => {
        res.send(students)
    })
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            'error' : error
        })
    })
}

exports.findOne = (req, res) => {
    //console.log(req.params.id)
    Student.findById(req.params.id)
    .then(students => {
        if (!students){
            res.status(404).send({'message': 'id not found'})
        }
        else 
        res.send(students);
    })
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            error : error
        })
    })
}

exports.update = (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            'message': "name cannot be empty"
        }); 
    }
    if(!req.body.major){
        return res.status(400).send({
            'message': "major cannot be empty"
        }); 
    }
    if(!req.body.age){
        return res.status(400).send({
            'message': "age cannot be empty"
        }); 
    }

    Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        major: req.body.major
    }, {new : true})
    .then(
        students => {
            if (!students){
                res.status(404).send({'message': 'id not found'})
            }
            else 
            res.send(students);
        }
    )
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            'error' : error
        })
    })
}
exports.delete = (req, res) =>{
    Student.findByIdAndRemove(req.params.id)
    .then(
        students => {
            if (!students){
                res.status(404).send({'message': 'id not found'})
            }
            else 
            res.send({
                message : "Record deleted"
            });
        }
    )
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            'error' : error
        })
    })
}