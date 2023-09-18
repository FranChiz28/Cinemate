const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect('/login');
        }
    });
   
});


module.exports = router;