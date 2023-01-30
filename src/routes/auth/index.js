const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
.get((req,res) => {
    res.render('register');
})
.post((req,res) =>{
    res.send('Post Auth router Register');
})

MainAuthRouter.route('/login')
.get((req,res) => {
    res.render('login');
})
.post((req,res) => {
    res.send('post login page');
})
module.exports = MainAuthRouter