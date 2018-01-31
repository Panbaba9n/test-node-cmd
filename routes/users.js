var express = require('express');
var router = express.Router();
var cmd=require('node-cmd');


/* GET users listing. */
router.get('/', function(req, res, next) {
  cmd.get(
    'pwd',
    function(err, data, stderr){
      console.log('the current working dir is : ',data)
      res.send(data);
    }
    );
  // res.send(data);
});

module.exports = router;
