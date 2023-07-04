<?php
    echo "<span style='color: blue;'>Example 02 :</span> <span style='color: green;'>Multi-Dimensinal Array </span><br>";
    $multiDArray=array(
        "A"=>array(0=>"red",2=>"blue",3=>"green"),
        "B"=>array(1=>"orange",2=>"black"),
        "C"=>array(0=>"white",4=>"purple",8=>"grey")
    );
    echo "<span>".$multiDArray["A"][3] . "</span><br>";
    echo "<span>".$multiDArray["C"][8] . "</span><br>";
?>