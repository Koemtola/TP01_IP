<?php
    if(isset($_POST['submit'])){
        $emp_name=trim($_POST["emp_name"]);
        $emp_number=trim($_POST["emp_number"]);
        $emp_email=trim($_POST["emp_email"]);
    }
    echo $emp_name;
    if($emp_name==""){
        $errorMsg="error: You did not enter a name.";
        $code="1";
    }elseif($emp_number===""){
        $errorMsg="error: Please enter number.";
        $code="2";
    }
    elseif(is_numeric(trim($emp_number))==false){
        $errorMsg="error: Please enter numric value.";
        $code="2";
    }elseif(strlen($emp_number)<10){
        $errorMsg="error: Number should be ten digits..";
        $code="2";
    }elseif($emp_email=""){
        $errorMsg="error: You did not enter a email";
        $code="3";
    }
    elseif(!preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $emp_email)){
        $errorMsg="error: You did not enter a valid email.";
        $code="3";
    }
    else{
        echo "Success";
    }
