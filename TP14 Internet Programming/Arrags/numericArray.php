<?php
    echo "Example 01 : Numeric Array <br><br>";
    $age= array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
//    or
    $age["Peter"]=35;
    $age["Ben"]=37;
    $age["Joe"]=43;

   foreach ($age as $key => $value) {
    echo "$key=>$value<br>";
   }
