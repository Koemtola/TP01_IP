<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .antialiased{
            margin-top: 10%;
        }
        .wrapper {
            height: auto;
            width: 400px;
            padding: 40px;
            box-shadow: 1px 2px 8px 2px rgb(177, 177, 177);
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text{
            font-size: 60px;
        }
        span{
            color: green;
        }
    </style>
</head>
<body class="antialiased">
    <div class="wrapper">
       <div class="text">Hello <span>World!</span></div>
    </div>
</body>
</html>