import React from 'react'

interface FunctionPermutationProps {
  userFunction: string;
  valueOfX: number;
  setValueOfX: (newValue: number) => void;
  handleSetUserFunction: (newAddedString: string) => void;
}

const HandleChangeOfFx: React.FC<FunctionPermutationProps> = ({ userFunction, valueOfX, setValueOfX, handleSetUserFunction }) => {
  const handleAddX = () => {
    handleSetUserFunction(userFunction + "+X");
  };
  const handleSubtractX = () => {
    handleSetUserFunction(userFunction + "-X");
  }
  const handleMultiplyX = () => {
    handleSetUserFunction(userFunction + "*X");
  }
  const handleDivideX = () => {
    handleSetUserFunction(userFunction + "/X");
  }



  return (
    <div>
    <div>HandleChangeOfF(x)</div>
    <button onClick={handleAddX} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Add an x to the equation</button>
    <button onClick={handleSubtractX} className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">Subtract an x to the equation</button>
    <button onClick={handleMultiplyX} className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded">Multiply an x to the equation</button>
    <button onClick={handleDivideX} className="bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">Divide an x to the equation</button>
    </div>
  )
}

export default HandleChangeOfFx