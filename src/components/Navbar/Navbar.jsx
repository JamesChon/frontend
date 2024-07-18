import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo1.gif';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(getTotalCartItems());
    }, [getTotalCartItems]);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="logo" />
                    <p>DRFT</p>
                </Link>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu('performance') }}><Link style={{ textDecoration: 'none' }} to='/performance'>PERFORMANCE</Link>{menu === 'performance' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('oem') }}><Link style={{ textDecoration: 'none' }} to='/oem'>OEM</Link>{menu === 'oem' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('specials') }}><Link style={{ textDecoration: 'none' }} to='/specials'>SPECIALS</Link>{menu === 'specials' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('aboutus') }}><Link style={{ textDecoration: 'none' }} to='/about'>ABOUT US</Link>{menu === 'aboutus' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('forum') }}><Link style={{ textDecoration: 'none' }} to='/forum'>FORUM</Link>{menu === 'forum' ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">{totalItems}</div>
            </div>
        </div>
    );
}

export default Navbar;
