import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
    const {id,name}=useParams();
  return (
    <div>
      <div className='container-fluid box'>
        <h1>This is body of About ,lets try to do something.</h1>
        <p>I use two route params id={id} and name={name}</p>
      </div>
    </div>
  )
}
