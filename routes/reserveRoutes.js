const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("reserveViews", {title: "Reserve Seat"});
});


module.exports = router;