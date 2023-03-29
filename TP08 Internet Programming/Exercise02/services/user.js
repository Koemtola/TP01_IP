var db = require('../db/db');

const login = (email, password) => {
  return new Promise((resolve,rejects)=>{
    db.getAllUsers().then((res)=>{
      for(let user of res){
        if(user.email===email&&user.password===password){
          resolve(true);
          return;
        }
      }
      resolve(false);
    });
  });
}
const register = (newUser) => {
  return new Promise((resolve,rejects)=>{
    let boolean=true;
    db.getAllUsers().then((res)=>{
      for(let user of res){
        if(user.email==newUser.email){
          resolve(false);
          boolean=false;
          break;
        }
      }
      resolve(true);
    }).then(()=>{
      if(boolean){
        db.addNewUser(newUser);
      }
    })
  });
}
module.exports = {
  login,
  register
}