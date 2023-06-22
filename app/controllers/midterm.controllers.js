//db connection and all other heavy-liftings
const Student = require('../models/midterm.models');

exports.create = async (req, res) => {
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
    const student = new Student({ //using lower case 'student' here will cause error of abiguity
        name : req.body.name,
        age: req.body.age,
        major: req.body.major
    })
    await student.save() 
    .then(data => res.send(data))
    .catch(error => {
        res.status(500).send({
            'message': 'Something went wrong',
            'error' : error
        })
    })
}

exports.findAll = async (req,res) => { 
    await Student.find()//find is a default function of mongoDB
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

exports.findOne = async (req, res) => {
    //console.log(req.params.id)
    await Student.findById(req.params.id)
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

exports.update = async (req, res) =>{
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

    await Student.findByIdAndUpdate(req.params.id, {
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
exports.delete = async (req, res) =>{
    await Student.findByIdAndRemove(req.params.id)
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