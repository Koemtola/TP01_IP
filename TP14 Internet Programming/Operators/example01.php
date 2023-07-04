<?php
    echo "Example 1 of operator";
    $var=1;
    $color="green";
    $title="Assign the interger $var to $var ";
    $text=" \$var is now equal to ";
    
    echo "<H2 style='color:$color'>";
    echo $title . '.';
    echo "</H2>";
    echo "-Print ".$var++ .",". $text . $var .".<br>";
    echo "-Print ".++$var .",". $text . $var .".<br>";
    echo "-Print ".--$var .",". $text . $var .".<br>";
    echo "-Print ".$var-- .",". $text . $var .".<br>";
?>