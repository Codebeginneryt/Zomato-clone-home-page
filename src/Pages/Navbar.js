import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import UnderNavbar from './UnderNavbar';

function Navbar() {
  return (
    <>
      <div className="navbar d-flex">
        <div className="logo">
          <h1>zomato</h1>
        </div>
        <div className="searchBar d-flex">
        <FontAwesomeIcon icon={faLocationDot} style={{color:"#ef4f5f", fontSize:"20px", margin:"0 10px"}}/>
          <div className="placeBar">
            <select name="" id="">
              <option value="">Delhi</option>
              <option value="">Palwal</option>
              <option value="">Faridabad</option>
              <option value="">Ballabgarh</option>
              <option value="">Old Border</option>
            </select>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"lightgrey", fontSize:"20px", margin:"2px 12px"}} />
          <div className="inputBar">
            <input type="text" placeholder="Search for resturent, food or dish" />
          </div>
        </div>
        <div className="loginBtn d-flex" >
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>
      </div>
      <UnderNavbar />
    </>
  )
}

export default Navbar