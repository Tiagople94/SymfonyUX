<?php


namespace App\Entity;


class calculator
{
    protected $num1;
    protected $num2;

    public function __construct(int $num1, int $num2)
    {
        $this->num1 = $num1;
        $this->num2 = $num2;
    }

    public function addition(): int
    {
        return $this->num1 + $this->num2;
    }

    public function combineNumbersString() :string {
        return "$this->num1$this->num2";
    }
}