<?php
    echo "<span style='color: blue;'>Example 04 :</span> 
    <span style='color: green;'>Foreach Loop </span><br>";
    $salary[]=2000;
    $salary[]=3000;
    $salary[]=5000;

    foreach ($salary as $key => $value) {
       echo "Salary: $value <br>";
    }
?>