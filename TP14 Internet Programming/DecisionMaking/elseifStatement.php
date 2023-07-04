<?php
    echo "<span style='color: blue;'>Example 02 :</span> 
    <span style='color: green;'>Elseif statement </span><br>";
    $date=date("m-d");
    if ($date=="07-04"){
        echo "Wishing you a very Happy Birthaday.";
    }elseif($date=="08-15"){
        echo "Happy Independence Day.";
    }else{
        echo "Nothing";
    }
?>