import React from "react";
import classes from './Header.module.css'

const Header = () => {
    const reset = () => {
        console.log('magic')
    }
    return <header className={classes.header}>
        <p>Билет 1</p>
        <button>
        <img 
            src="https://img.icons8.com/glyph-neue/64/000000/fantasy.png"
            alt="magic"
            onClick={()=> reset()}
        />
        </button>    
    </header>
}

export default Header