import React, { useState } from 'react'
import { evaluate } from 'mathjs'

const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "C"
];

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0')
      setExpression('')
    } else if (value === '=') {
      try {
        const result = evaluate(expression)
        setDisplay(result.toString())
        setExpression(result.toString())
      } catch (error) {
        setDisplay('Error')
        setExpression('')
      }
    } else {
      const newExpression = expression + value
      setExpression(newExpression)
      setDisplay(newExpression)
    }
  }

  return (
    <div className='calculator'>
      <div className='display'>{display}</div>
      <div className='buttons'>
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  )
}
