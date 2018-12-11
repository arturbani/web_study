<?php
    require_once 'classes/calculator.php';

    // Get the variables from html
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $operation = $_POST['operation'];

    // Init calculator
    $calculator = new Calculator($number1, $number2);
    
    // Choose which operation will be used
    switch($operation){
        case 'sum':
            $calculator->sum();
        break;

        case 'diff':
            $calculator->difference();
        break;

        case 'quot':
            $calculator->quotient();
        break;

        case 'prod':
            $calculator->product();
        break;
    }
    
	echo $calculator->getResult();    


?>