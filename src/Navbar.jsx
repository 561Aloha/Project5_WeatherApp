import React from 'react';
import './App.css'

function Navbar() {
    return (
        <div><h3>Navigation Bar</h3>
        <div className='navbar-container'>
            <a href ='https://www.google.com' ><h3>Page 1</h3></a>
            <a href ='https://www.microsoft.com' ><h3>Page 2</h3></a>
            <a href ='https://www.spotifu.com' ><h3>Page 3</h3></a>
        </div></div>
    );
}

export default Navbar;