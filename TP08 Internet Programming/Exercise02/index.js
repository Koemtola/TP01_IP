const express = require('express')
var bodyParser = require('body-parser');
const userService = require('./services/user');
const app = express()
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', function (req, res) {
  const { email, password } = req.body;
  if(res){
    userService.login(email, password).then((result)=>{
      res.json({
        "success": result
      })
    })
  }
})
app.post('/register', function (req, res) {
  const { email, password, username, gender, dob } = req.body;
  const newUser = { email, password, username, gender, dob };
  if(res){
    userService.register(newUser).then((result)=>{
      if(result){
        res.json({
          success:result,
          newUser
        })
      }else{
        res.json({
          success:result,
        })
      }
    })
  }else{
    res.json({
      success:false,
    })
  }
})
app.listen(port, () => {
  console.log("Server is running on port "+port);
});