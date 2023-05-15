import React from 'react'

interface FunctionPermutationProps {
  userFunction: string;
  valueOfX: number;
  setValueOfX: (newValue: number) => void;
  handleSetUserFunction: (newAddedString: string) => void;
}

const HandleChangeOfFx: React.FC<FunctionPermutationProps> = ({ userFunction, valueOfX, setValueOfX, handleSetUserFunction }) => {
  return (
    <div>
    <div>HandleChangeOfF(x)</div>
    <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Add another X to the equation</button>
    </div>
  )
}

export default HandleChangeOfFx