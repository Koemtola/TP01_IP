<?php
    echo "Example 04 : Foreach Loop <br><br>";

    $salary[]=2000;
    $salary[]=3000;
    $salary[]=5000;

    foreach ($salary as $key => $value) {
       echo "Salary: $value <br>";
    }
?>