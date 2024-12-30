let router = require("express").Router();
let task = require("./task")

router.use('/api/tasks', task)




module.exports = router;