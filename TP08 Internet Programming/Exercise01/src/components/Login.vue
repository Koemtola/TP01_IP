
<template>
  <main>
    <div class="main-wrapper">
      <div id="content">
        <div id="image">
          <img id="img" src="./icon/user-login.png" alt="">
        </div>
        <label for="">Username</label><br>
        <input type="text" placeholder="Enter email"><br>
        <label for="">Password</label><br>
        <input type="text" placeholder="Enter Password"><br>
        <button>Login</button>
        <div id="forget-password">Forget<span><a href="">password</a></span></div>
          <p></p>
      </div>
    </div>
  </main> 
</template>
<style>
  .main-wrapper{
    height: 550px;
    width: 520px;
    border: 1px solid black;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #content{
    width: 90%;
    height: 100%;
    background: rgb(255, 255, 255);
  }
  input,button{
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
    margin: 10px 0px 10px 0px;
    background: rgb(240, 240, 240);
    border: none;
  }
  input:focus{
    border: 1px solid rgb(20, 174, 0);
    outline: none;
  }
  button{
    margin: 20px 0px 20px 0px;
    background: rgb(20, 174, 0);
    color: white;
  }
  #img{
    text-align: center;
  }
  #image{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0px 0px 0px;
  }
  #img{
    height: 200px;
  }
  #forget-password{
    width: fit-content;
    margin-left: auto;
  }
</style>