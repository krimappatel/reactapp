import React from 'react'
import UpdatedComponent from './CounterHoc'

function ClickCounter(props) {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.incrementHandler}>Click {props.count} Times using HOC</button>
    </div>
  )
}

export default UpdatedComponent(ClickCounter,10)
