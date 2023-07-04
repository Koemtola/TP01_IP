<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP POST form handling</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .form {
            margin: auto;
            height: auto;
            width: 200px;
            box-shadow: 1px 2px 8px 2px rgb(177, 177, 177);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10%;
            padding: 20px 0px 20px 0px;
            border-radius: 5px;
        }
        input,
        label {
            margin: 4px;
        }
        input{
            padding: 3px;
        }
        h4{
            text-align: center;
            color: blue;
        }
    </style>
</head>
<body>
    <div class="form">
        <div class="wrapper">
            <form action="registration.php" method="get">
                <h4>Registration</h4>
                <label for="">Name</label><br>
                <input type="text" name="name"><br>
                <label for="">Email</label><br>
                <input type="text" name="email"><br>
                <input type="submit">
            </form>
        </div>
    </div>

</body>

</html>