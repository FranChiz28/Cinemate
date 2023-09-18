const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{

    if(req.session.user){
        res.render("dashViews", {title: "Dashboard", user:req.session.user, userRevenue:"Php 10,000.000", allRevenue:"Php 100,000.00"});
    }else{
        res.sendStatus(403);
    }
    
});


module.exports = router;