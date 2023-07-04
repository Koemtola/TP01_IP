<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcom</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .app {
            margin: auto;
            height: auto;
            width: 250px;
            box-shadow: 1px 2px 8px 2px rgb(177, 177, 177);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10%;
            padding: 20px 0px 20px 0px;
            border-radius: 5px;
        }

        .wrapper {
            text-align: center;
        }
        button{
            margin-top: 10px;
            padding: 3px;

        }
       
    </style>
</head>

<body>
    <div class="app">
        <?php
        $name = $_POST["name"];
        $uppercase_name = strtoupper($name);
        echo "<div class='wrapper'>";
        echo "<span style='color: blue; font-size:24px'>Welcome $uppercase_name !</span>";
        echo "<br><span style=' font-size:12px'>Your email address is </span>" . "<span style='color: green; font-size:12px'>" . $_POST["email"] . "</span>";
        echo "
        <div>
            <button onclick='goBack()'>Back</button>
            <script>
                function goBack() {
                    window.history.back();
                }
            </script>
        </div>
        ";
        echo "</div>";
        ?>
    </div>
    
</body>

</html>