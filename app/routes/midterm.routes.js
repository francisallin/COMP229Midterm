//get app from index
module.exports = (app) => {
    const midterm = require('../controllers/midterm.controllers');

    app.post('/students', midterm.create);

    app.get('/students', midterm.findAll) ;

    app.get('/students/:id', midterm.findOne) ;

    app.put('/students/:id', midterm.update) 

    app.delete('/students/:id', midterm.delete) 
}