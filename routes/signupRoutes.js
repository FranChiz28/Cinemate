const express = require("express");
const router = express.Router();
const collection = require("../module/mongodb");

router.post("/",async (req, res)=>{

    const data = {
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.redirect('/dashboard');
})

module.exports = router;