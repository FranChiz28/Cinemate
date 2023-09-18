const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("movieViews", {title: "Movie Info"});
});


module.exports = router;