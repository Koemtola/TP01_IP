<?php
    echo "Example 01 : Operator <br>";
    $var=1;
    $color="green";
    $title="<br> Assign the interger $var to $var ";
    $text=" \$var is now equal to ";
    
    echo "<span style='color:$color'>";
    echo $title . '.<br>';
    echo "</span>";
    echo "Print ".$var++ .",". $text . $var .".<br>";
    echo "Print ".++$var .",". $text . $var .".<br>";
    echo "Print ".--$var .",". $text . $var .".<br>";
    echo "Print ".$var-- .",". $text . $var .".<br>";
?>