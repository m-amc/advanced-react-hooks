// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Traditional dispatch object with a type and switch
const countReducer = (state, action) => {
  const {type, step} = action
  switch (type) {
    case 'INCREMENT':
      return {count: state.count + step}
    default:
      throw new Error(`Unsupported action type: ${type}`)
  }
}

// setState with an object or function
function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

// const countReducer = (state, action) => {
//   // return typeof action === 'function' ? action(state) : {...state, ...action}

//   return {
//     ...state,
//     ...(typeof action === 'function' ? action(state) : action),
//   }
// }

// // setState with an object or function
// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   const {count} = state

//   const increment = () =>
//     setState(currentState => {
//       return {count: currentState.count + step}
//     })
//   return <button onClick={increment}>{count}</button>
// }

// state as object
// const countReducer = (state, newState) => {
//   return {...state, ...newState}
// }
// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   const {count} = state

//   const increment = () => setState({count: count + step})
//   return <button onClick={increment}>{count}</button>
// }

// function Counter({initialCount = 0, step = 1}) {
//   // 🐨 replace React.useState with React.useReducer.
//   // 💰 React.useReducer(countReducer, initialCount)
//   const [count, setCount] = React.useReducer(countReducer, initialCount)

//   // 💰 you can write the countReducer function so you don't have to make any
//   // changes to the next two lines of code! Remember:
//   // The 1st argument is called "state" - the current value of count
//   // The 2nd argument is called "newState" - the value passed to setCount
//   const increment = () => setCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

function App() {
  return <Counter />
}

export default App
