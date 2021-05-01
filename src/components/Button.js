import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES=['btn--primary','btn--outline']

const SIZES=['btn--medium','btn--large'];

export const Button=({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSide = SIZES.includes(buttonSize) ? 
    buttonSize:SIZES[0]

    return(
        <Link to="/sing-up" className='btn-mobile'>
        <button
        className={'btn ${checkButtonStyle} ${checkButtonSise}'}
        onClick={onclick}
        type={type}>
            {children}
        </button>

        </Link>
    )
};