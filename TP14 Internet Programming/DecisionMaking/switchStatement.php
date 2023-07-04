<?php
echo "<span style='color: blue;'>Example 03 :</span> 
<span style='color: green;'>Switch statement </span><br>";
$myFavColor = 'pink';
switch ($myFavColor) {
    case 'pink':
        echo "My favorite car color is pink!";
        break;
    case 'red':
        echo "My favorite car color is red!";
        break;
    case 'orange':

        echo "My favorite car color is orange!";
        break;
    default:
        echo "My favorite car color is not pink, red , or orange!";
}
?>
