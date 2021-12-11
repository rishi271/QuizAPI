const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const User = require("./models/userSchema");
router.get('/',(req,res) => {
    res.send(`hello everyone this is me rahulsingh`);
});

router.post('/register',(req,res) => {

    const{name,email,phone,password,cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({ error:"pls filled the field the error"});
    }

    User.findOne({ email:email})
    .then((userExist) => {
        if (userExist){
            return res.status(422).json({ error : "Email already exists"});
        }
        const user = new User({name,email,phone,password,cpassword})
        user.save().then(() => {
            res.status(201).json({Message:"user registered"});
        }).catch((err) => res.status(500).json({error:"failed"}));
    }).catch(err => {console.log(err);});
});

module.exports = router;