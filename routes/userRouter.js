const router = require("express").Router();
//HTTP get request
router.get("/test", (req,res) => {
   res.send("Hello its working");
});

module.exports = router;