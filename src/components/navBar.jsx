import React, { Component } from 'react';

const Navbar = ({totalNumberOfCounters}) => {
    return ( 
        
            <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar <span className='btn btn-pill btn-secondary '>{totalNumberOfCounters}</span>
              </a>
            </div>
          </nav>
 
      );
}
 
export default Navbar;
        
