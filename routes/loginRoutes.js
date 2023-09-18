const express = require("express");
const router = express.Router();
const collection = require("../module/mongodb");

router.get("/", (req, res)=>{
    res.render("loginViews", {title: "Login"});
});

router.post("/",async (req, res)=>{

    try{
        const check = await collection.findOne({email:req.body.email})
    
        if(check.password===req.body.password){
            req.session.user = check.userName
            res.redirect("/dashboard")
        } else {
            res.render('loginViews', {title: 'Login', pwError:'incorrect password'})
        }
    }
    catch {
        res.render('loginViews', {title: 'Login', dataError:'user not found'})
    }

})

module.exports = router;