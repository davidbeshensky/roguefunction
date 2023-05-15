import React from 'react';
import { useState } from 'react'

interface FunctionPermutationProps {
  userFunction: string;
  valueOfX: number;
  setValueOfX: (newValue: number) => void;
  handleSetUserFunction: (newAddedString: string) => void;
}

const FunctionPermutation: React.FC<FunctionPermutationProps> = ({ userFunction, valueOfX, setValueOfX}) => {

const [numberOfChanges, setNumberOfChanges]=useState(0);

const handleIncrementValueOfX = () => {
    const randomInteger = Math.floor(Math.random() * 21) - 10;
    setValueOfX(valueOfX + randomInteger);
    setNumberOfChanges(numberOfChanges + 1)
}

  return (
    <div>    
    <div>handleChangeOfX; number of times changed {numberOfChanges}</div>
    <button onClick={handleIncrementValueOfX} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Change The Value Of X +/- 10</button>
    </div>

  );
};

export default FunctionPermutation;
