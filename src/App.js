import React from 'react'
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux'


const operation = (state = [], action) => {

  switch (action.type) {
    case 'PLUS':
    let add = parseFloat(action.first) + parseFloat(action.second)
      return [].concat(add, state)
    case 'MINUS':
      let subtration = action.first - action.second
      return [].concat(subtration, state)
    case 'MULTIPLY':
      let product = action.first * action.second
      return [].concat(product, state)
    case 'DIVIDE':
      let result = action.first / action.second
      return [].concat(result, state)
    default:
      return state;
  }
}

const onClick = (event, dispatch) => {
  event.preventDefault()
  const first = event.target.elements.first.value;
  const second = event.target.elements.second.value
  const operation = event.target.elements.operation.value
  dispatch({
    type: operation,
    first: first,
    second: second,
  })
}

const math = (props) => (
  <div>
    <form onSubmit={(event) => onClick(event, props.dispatch)}>
      <input type='number' name="first" step="0.1" />
      <input type='number' name="second" step="0.1" />
      <select name="operation">
        <option value="PLUS">+</option>
        <option value="MINUS">-</option>
        <option value="DIVIDE">/</option>
        <option value="MULTIPLY">*</option>
      </select>
      <input type="submit" value="GIVE ME THE FUCKING RESULT"/>
    </form>
    <p>{props.counts}</p>
  </div>
)
const getActualState = (actualState => {
  return {
    counts: actualState.operation,
  }
})

const Calculator = connect(getActualState)(math)

const store = createStore(combineReducers({
  operation: operation
}))

export default () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
)
