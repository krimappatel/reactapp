import React from 'react'
import UpdatedComponent from './CounterHoc'

function HoverCounter(props) {
  return (
    <div>
      <p>{props.name}</p>
      <button onMouseOver={props.incrementHandler}>Hover {props.count} Times using HOC</button>
    </div>
  )
}
// also we will add argument here 5 means 5 time increment hover,HoverCounter and 5 both are arguments which is pass in UpdateComponent function
export default UpdatedComponent(HoverCounter,5)
