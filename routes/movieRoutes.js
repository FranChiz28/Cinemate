const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("movieViews", {title: "Movie Info", user:"Name", userRevenue:"Php 10,000.000", allRevenue:"Php 100,000.00"});
});


module.exports = router;