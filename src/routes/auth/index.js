const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
.get((req,res) => {
    res.render('register');
})
.post((req,res) =>{
    res.send('Post Auth router Register');
})

module.exports = MainAuthRouter