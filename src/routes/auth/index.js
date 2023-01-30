const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
.get((req,res) => {
    res.send('Get Auth Credentials');
})
.post((req,res) =>{
    res.send('Post Auth router Register');
})

module.exports = MainAuthRouter