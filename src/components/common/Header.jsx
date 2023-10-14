import React from 'react'
import Navbar from './Navbar'
import "./Header.css"

const Header = (props) => {
  return (
    <>
        <header>
        <Navbar onClick={props.onClick}/>
        <div id="the-generics-text">
          <h1>The Generics</h1>
        </div>
        </header>
    </>
  )
}

export default Header