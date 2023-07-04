<?php
// Start the session
session_start();

// Set some session variables
$_SESSION["username"] = "johndoe";
$_SESSION["email"] = "johndoe@example.com";

// Output a message to confirm that the session variables have been set
echo "Session variables have been set!";

// Destroy the session and unset all session variables
session_destroy();

// Output a message to confirm that the session has been destroyed
echo "Session has been destroyed!";
?>
