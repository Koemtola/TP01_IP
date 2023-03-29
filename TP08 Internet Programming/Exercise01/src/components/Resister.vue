<template>
    <main class="main" >
      <div class="content">
        <h1>Sign Up</h1>
        <label for="">Email</label><br>
        <input type="email" placeholder="Enter Email"><br>
        <label for="">Username</label><br>
        <input type="text"  placeholder="Username"><br>
        <label for="">First name</label><br>
        <input type="text"  placeholder="First Name"><br>
        <label for="">Last name</label><br>
        <input type="text"  placeholder="Last name"><br>
        <label for="">Password</label><br>
        <input type="password"  placeholder="Create your Password"><br>
        <p>By creating an account you agree to our<span><a href="">Terms & Privacy</a> </span></p>
        <button>Sign Up</button>
      </div>
    </main> 
  </template>
<style>
  .main{
    margin: auto;
    height: 620px;
    width:520px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    height: 90%;
    width:90%;
    border: 1px solid black;
    border: beige;
  }
  a{
    margin-left: 4px;
  }
  button:hover{
    background: rgb(22, 192, 0);
    color: white;
  }
</style>