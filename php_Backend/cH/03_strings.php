<?php
    $str = "This is a string";
    echo $str;
    echo "<br>";

    //length of strings
    $lenn = strlen($str);
    echo "The length is : " . $lenn . ", for the string = " . $str;
    echo "<br>";
    echo "The number of words is : " . str_word_count($str) . ", for the string = " . $str;
    echo "<br>";
    //concatenation with dot .
    //reverse string
    echo "The string in reverse order is : " . strrev($str) . ", for the string = " . $str;
    echo "<br>";

    //search word
    echo "The search result is in " . strpos($str, "is") . "<br>";

    //replace string
    echo "After replacing is with at : " . str_replace("is", "at", $str) . "<br>";



?>