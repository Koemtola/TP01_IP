<?php
    echo "Exampe 02 : Elseif statement  <br><br> ";
    $date=date("m-d");
    if ($date=="07-04"){
        echo "Wishing you a very Happy Birthaday.";
    }elseif($date=="08-15"){
        echo "Happy Independence Day.";
    }else{
        echo "Nothing";
    }
?>