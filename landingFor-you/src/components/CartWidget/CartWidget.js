import React from 'react'
import "./CartWidget.css";
import icono from "./icon.png";


const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <a className="navbar-brand">
                <img src={icono} className="space_icon_nav"></img>
            </a>
        </div>
    )
}

export default CartWidget