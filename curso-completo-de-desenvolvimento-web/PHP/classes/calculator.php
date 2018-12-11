<?php
class Calculator{
    private $result;
    private $number1;
    private $number2;

    function __construct($number1, $number2){
        $this->result = 0;
        $this->number1 = $number1;
        $this->number2 = $number2;
    
    }

    //Access methods:

    public function getResult(){
        return $this->result;
    
    }

    public function setResult($number){
        $this->result = $number;
    
    }

    public function getNumber1(){
        return $this->number1;
    
    }
    
    public function setNumber1($number){
        $this->number1 = $number;
    
    }
    
    public function getNumber2(){
        return $this->number2;
    
    }
    
    public function setNumber2($number){
        $this->number2 = $number;
    
    }

    // Operations
    public function sum(){
        $this->result = $this->number1 + $this->number2;

    }

    
    public function difference(){
        $this->result = $this->number1 - $this->number2;

    }

    
    public function product(){
        $this->result = $this->number1 * $this->number2;

    }

    
    public function quotient(){
        $this->result = $this->number1 / $this->number2;

    }

}  
?>