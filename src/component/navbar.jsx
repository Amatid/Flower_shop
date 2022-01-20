import classes from './navbar.module.css'
import FontAwesome from 'react-fontawesome';
import { useState } from 'react';

function Navbar() {
    const [items, setItems] = useState(0);

    return ( 
    <div className={classes.navbar}>
        <div className={classes.navigation}>
            <span>Home</span>
            <span>Cristmas</span>
            <span>Season's Best</span>
            <span>Wedding</span>
            <span>My Occasions</span>
            <span>By Types</span>
            <span>By Prices</span>
            <span>By Flowers</span>
            <span>Plants</span>
            <span>Terrariums</span>
        </div>
        <div>
            <div className={classes.cart}>
                <FontAwesome name='shopping-cart'/>Cart({items})
            </div>
        </div>
    </div> );
}

export default Navbar;