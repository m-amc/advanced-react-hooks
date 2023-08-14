// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

// This is a good way to provide useful error message
// in case we (or someone) forgot to wrap the CountDisplay and Counter in our CountProvider component
const useCount = () => {
  const context = React.useContext(CountContext)
  console.log(context)
  if (!context) {
    throw new Error('useCount must be rendenered within the CountProvider')
  }

  return context
}

// The props in this example is the children prop so we can display the nested components!
const CountProvider = props => {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]

  return <CountContext.Provider value={value} {...props} />
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
