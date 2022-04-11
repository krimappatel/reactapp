import React, { useEffect } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'
import Center from './Center'
import { Outlet } from 'react-router-dom'


export default function Navbar() {
    const id=1 , name="krima";
    // useLocation give current url automatically
    const location=useLocation();
    console.log(location)
  return (
  <>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink style={({isActive})=>{return{display: "block",background:'gray',color:isActive?'White':''}}}className="navbar-brand" to="/">Routing</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item ">
                <Link className="nav-link" to={"/about/"+id+"/"+name}>About</Link>
            </li>
            <li className="nav-item">
                {/* <Link className={`nav-link ${location.pathname==='form/'+id ? 'active':''}`} to={"/form/"+id}>Form</Link> */}
                <Link className='nav-link' to={'form/'+id}>Form</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to={"apidata/"}>API data</Link>
            </li>
            </ul>
        </div>
    </nav>
    <Outlet/>
  </div>
  </>
  )
}
