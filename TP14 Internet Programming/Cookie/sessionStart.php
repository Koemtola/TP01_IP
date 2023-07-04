<?php
// Start the session before any output is sent
session_start();

// Set the session variables
$_SESSION["username"] = "nita";
$_SESSION["email"] = "nita@gmail.com";

// Output a message to confirm that the session variables have been set
echo "Session variables have been set!<br>";

// Retrieve the session variables on another page
echo "Username: " . $_SESSION["username"]."<br>";
echo "Email: " . $_SESSION["email"];
?>