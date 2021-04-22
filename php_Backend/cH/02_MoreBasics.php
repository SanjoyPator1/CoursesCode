<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More basics</title>
</head>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    max-width: 80%;
    background-color: grey;
    margin: auto;
    padding: 24px;
}

</style>

<body>

    <div class="container">
    <h1>This is a container </h1>
    <?php

    echo "Your VOTING status is here <br>";

    $age = 35;
    if($age>=18){
        echo "You can go to vote <br>";
    }else{
        echo "You can't vote <br>";
    }

    //ARRAY
    $languages = array("c++", "php", "c", "node");
    echo $languages[0]; echo "<br>";

    echo count($languages); echo "<br>";

    //while loop
    echo "While loop <br>";
    $a = 0;
    while ($a <= 3) {
        # code...
        echo "The value of a is : $a <br>"; $a++;
    }

    //while loop on array
    $b =0;
    while ($b < count($languages)) {
        # code...
        echo "The value of language is : $languages[$b] <br>"; $b++;
    }

    //for loop
    for ($a=0; $a < 4; $a++) { 
        # code...
        echo "The value of a is : $a <br>";
    }

    //for each
    foreach ($languages as $key => $value) {
        # code...
        echo "the value is : $value <br>";
    }

    //function definition
    function print_num($num){
        echo " Your number is $num <br>";
    }

    //calling function
    print_num(69);
    print_num(33);


    ?>

    
    </div>
    
</body>
</html>