"use client"
import React from 'react'
import { useState } from 'react'
import HandleChangeOfFx from './HandleChangeOfFx';
import HandleChangeOfX from './HandleChangeOfX';

const ParentComponent = () => {
const [valueOfX, setValueOfX] = useState(1)
const [userFunction, setUserFunction] = useState("x");

const handleSetUserFunction = (newAddedString: string) => {
    setUserFunction(newAddedString)
}

const handleSetValueOfX = (newValue: number) => {
    setValueOfX(newValue);
};


  return (
    <div>
    ParentComponent
    <p>f(x) = {userFunction}</p>
    <p>where x = {valueOfX}</p>
    <p>f({valueOfX}) = {valueOfX}</p>
    <HandleChangeOfX userFunction={userFunction} valueOfX={valueOfX} setValueOfX={handleSetValueOfX} handleSetUserFunction={handleSetUserFunction}/>
    <HandleChangeOfFx userFunction={userFunction} valueOfX={valueOfX} setValueOfX={handleSetValueOfX} handleSetUserFunction={handleSetUserFunction}/>
    </div>

  )
}

export default ParentComponent

// f(x) = x 

// x +/- * number 

// userFunction = {
//  step0: x
//  step1: f(x)+1
//  step2: 3*f(x)
//  step3: sqrt(f(x))
//  step4: exp
//}

//store it as a tree?

//how do computers do math? by storing a tree of all operations and using recursion to iterate over the tree in order.

//a tree preserves order

//Abstract Syntax Tree

//consider mapping out frontend