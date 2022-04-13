import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBullhorn, faArrowDown, faMagnifyingGlass } from  '@fortawesome/free-solid-svg-icons';
// import Logo from './img/Reddit_logo_new.svg'
function FixedHeader() {
  return (
    <div className="headerOuter">
      <div className="headerContainer">
        {/* <div><Logo /></div> */}
        <form className="searchDiv">
          <label htmlFor="searchBar" className='faMag'><FontAwesomeIcon icon={faMagnifyingGlass} className='actMag'></FontAwesomeIcon></label>
          <input type="text" className='searchBar' placeholder='Search Reddit'/>
        </form>
        <div className='buttonGroup'>
          <div><button className='faBullhorn'><FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon></button></div>
          <div><button className='ioButton iButton'>Log In</button></div>
          <div><button className='ioButton oButton'>Sign Up</button></div>
          <div><button className='faUser'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button></div>
          </div>
          </div>
    </div>
  )
}

export default FixedHeader