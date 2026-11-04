import { useState } from 'react'
function App() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [expression, setExpression] = useState('')
  const handleNumber = (number) => {
    if (display === '0' || display === 'Error') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }
  const handleOperator = (op) => {
    setFirstNumber(display)
    setOperator(op)
    setExpression(`${display} ${op}`)
    setDisplay('0')
  }
  const handleCalculate = async () => {
    if (firstNumber === null || operator === null) return
    const operations = {
      '+': 'add',
      '-': 'sub',
      '*': 'mul',
      '/': 'div',
      '%': 'mod',
      '**': 'pow'
    }
    const currentExpression = `${firstNumber} ${operator} ${display}`
    setExpression(currentExpression)
    try {
      const response = await fetch(
        `http://localhost:3000/${operations[operator]}/${firstNumber}/${display}`
      )
      const result = await response.json()
      if (result.success) {
        setDisplay(String(result.data))
        setExpression(`${currentExpression} = ${result.data}`)
      } else {
        setDisplay('Error')
        setExpression('Invalid operation')
      }
      setFirstNumber(null)
      setOperator(null)
      } catch (error) {
      console.log('Error:', error)
      setDisplay('Error')
      setExpression('Server connection failed')
    }
  }
  const handleClear = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
    setExpression('')
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="bg-gray-800 p-6 rounded-2xl w-80 shadow-2xl">
    <h1 className="text-2xl font-bold text-white text-center mb-6">Calculator</h1>
    {/* Display */}
    <div className="bg-gray-950 text-white text-right p-5 rounded-lg mb-5 overflow-hidden">
    <div className="text-sm text-gray-400 min-h-5">
            {expression}
    </div>
    <div className="text-3xl break-all">
            {display}
    </div>
    </div>
    {/* Calculator buttons */}
    <div className="grid grid-cols-4 gap-3">
    <button onClick={handleClear} className="bg-red-500 text-white p-4 rounded-lg">
     C
    </button>
    <button onClick={() => handleOperator('**')} className="bg-gray-600 text-white p-4 rounded-lg">
    ^
    </button>
    <button onClick={() => handleOperator('%')} className="bg-gray-600 text-white p-4 rounded-lg">
     %
    </button>
    <button onClick={() => handleOperator('/')} className="bg-orange-500 text-white p-4 rounded-lg">
    /
    </button>
    <button onClick={() => handleNumber('7')} className="bg-gray-700 text-white p-4 rounded-lg">7</button>
    <button onClick={() => handleNumber('8')} className="bg-gray-700 text-white p-4 rounded-lg">8</button>
    <button onClick={() => handleNumber('9')} className="bg-gray-700 text-white p-4 rounded-lg">9</button>
    <button onClick={() => handleOperator('*')} className="bg-orange-500 text-white p-4 rounded-lg">*</button>
    <button onClick={() => handleNumber('4')} className="bg-gray-700 text-white p-4 rounded-lg">4</button>
    <button onClick={() => handleNumber('5')} className="bg-gray-700 text-white p-4 rounded-lg">5</button>
    <button onClick={() => handleNumber('6')} className="bg-gray-700 text-white p-4 rounded-lg">6</button>
    <button onClick={() => handleOperator('-')} className="bg-orange-500 text-white p-4 rounded-lg">-</button>
    <button onClick={() => handleNumber('1')} className="bg-gray-700 text-white p-4 rounded-lg">1</button>
    <button onClick={() => handleNumber('2')} className="bg-gray-700 text-white p-4 rounded-lg">2</button>
    <button onClick={() => handleNumber('3')} className="bg-gray-700 text-white p-4 rounded-lg">3</button>
    <button onClick={() => handleOperator('+')} className="bg-orange-500 text-white p-4 rounded-lg">+</button>
    <button onClick={() => handleNumber('0')} className="bg-gray-700 text-white p-4 rounded-lg col-span-2">0</button>
    <button onClick={handleCalculate} className="bg-green-500 text-white p-4 rounded-lg col-span-2">=</button>
    </div>
    </div>
    </div>
  )
}
export default App
