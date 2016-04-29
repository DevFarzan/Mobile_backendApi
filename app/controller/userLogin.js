var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    passport = require('passport');
    Dish = mongoose.model('Dish'),
     fs = require('fs');
    passwordHash = require('password-hash');
    jwt = require('express-jwt');
    Profile = mongoose.model('Profile'),
    User = mongoose.model('User');

module.exports = function(app){
    app.use('/', router);
}

router.post('/userlogin',function(req,res,next){

    if(!req.body.login.mobileNumber || !req.body.login.Password){
        return res.status(400).json({message: 'The mobile number or password you entered is incorrect. Please try again (check caps lock).'});
    }

    var user = req.body;


        if (user) {
            console.log("IF user :", user);

            User.find({
                mobile: user.login.mobileNumber,
        }, function (err, data) {
                if (err) {
                    console.log(err);
                    return res.status(400).json({message: 'userDetail details not found.'});
                }

                //var isChef = profile.usertype && profile.usertype == "chef" ? true : false;
                return res.json({uid: user._id,data:data});

            });
        }


       /* if(user) {
            User.find({
                mobile: user.login.mobileNumber,
            }, function (err, data) {
                res.send({
                    err: err,
                    data: data
                })
            })
        }*/

})