<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP tutorial</title>
</head>
<body>
    <div class="container">
    This is my first php website
    </div>

    

    <?php
    //constant
    define('PI', 3.14);
        echo "Hiii! from php ";
        echo "<br>";

        //variable
        $var1 = 23;
        $var2 = 3;
        echo "the vaule of var1 + var2 is "; echo "<br>";
        echo $var1+$var2; echo "<br>";

        //comparison
        echo "the value of 1==4 is ";
        echo var_dump(1==4); echo "<br>";

        echo "the value of 1!=4 is  ";
        echo var_dump(1!=4); echo "<br>";

        echo "the value of 1>=4 is ";
        echo var_dump(1>=4); echo "<br>";

        echo "the value of 1<=4 is ";
        echo var_dump(1<=4); echo "<br>";


        //operators increment decrement
        $var3 = 5;
        $var4 =6;

        echo $var3++; echo "<br>";
        echo "now value var3 after var++ is  $var3"; echo "<br>";
        echo $var4--; echo "<br>";
        echo "now value var4 after var-- is  $var4"; echo "<br>";
        echo ++$var3; echo "<br>";
        echo "now value var3 after ++var is  $var3";  echo "<br>";
        echo --$var4; echo "<br>";
        echo "now value var4 after --var is  $var4"; echo "<br>";

        //Logical operators
        //and (&&)
        echo "For && operator <br>";
        $var5 = (true && true); echo var_dump($var5); echo("<br>");
        $var5 = (false && true); echo var_dump($var5); echo("<br>");
        $var5 = (false && false); echo var_dump($var5); echo("<br>");

        //or (||)
        echo "For || operator <br>";
        $var5 = (true  || true); echo var_dump($var5); echo("<br>");
        $var5 = (false || true); echo var_dump($var5); echo("<br>");
        $var5 = (false || false);echo var_dump($var5); echo("<br>");
        

        //xor xor
        echo "For xor operator <br>";
        $var5 = (true  xor true); echo var_dump($var5); echo("<br>");
        $var5 = (false xor true); echo var_dump($var5); echo("<br>");
        $var5 = (false xor false);echo var_dump($var5); echo("<br>");

        //not (!)
        echo "For != operator <br>";
        $var5 = (true  != true); echo var_dump($var5); echo("<br>");
        $var5 = (false != true); echo var_dump($var5); echo("<br>");
        $var5 = (false != false);echo var_dump($var5); echo("<br>");

        //Data types
        //string
        $var6 = "this is a string"; echo "<br>"; 
        echo var_dump($var6); echo "<br>";

        //integer
        $var6 = 20; echo "<br>"; 
        echo var_dump($var6); echo "<br>";

        //float
        $var6 = 20.11; echo "<br>"; 
        echo var_dump($var6); echo "<br>";

        //boolean
        $var6 = true; echo "<br>"; 
        echo var_dump($var6); echo "<br>";

        //calling constant
        echo PI;


    ?>
    
</body>
</html>