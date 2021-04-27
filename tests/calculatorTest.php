<?php

use PHPUnit\Framework\TestCase;
use App\Entity\calculator;

final class calculatorTest extends TestCase
{
    private $class;

    public function setUp():void
    {
        $this->class = new calculator(2,1);
    }

    public function testReceivedNumbers()
    {
        $this->assertIsInt($this->class->addition());
    }
    /**
     * @depends testReceivedNumbers
     */
    public function testAddition()
    {
        $this->assertEquals(3, $this->class->addition());
    }

    public function testNotNumber()
    {
        $this->expectException(TypeError::class);
        $this->class = new calculator('asd',1);
    }

    public function testCombinationNumbers()
    {
        $this->assertEquals("21",$this->class->combineNumbersString());
    }
}