import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo1.gif';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const [totalItems, setTotalItems] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setTotalItems(getTotalCartItems());
    }, [getTotalCartItems]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="logo" />
                    <p>DRFT</p>
                </Link>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { setMenu('performance'); setIsMenuOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/performance'>PERFORMANCE</Link>{menu === 'performance' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('oem'); setIsMenuOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/oem'>OEM</Link>{menu === 'oem' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('specials'); setIsMenuOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/specials'>SPECIALS</Link>{menu === 'specials' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('aboutus'); setIsMenuOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/about'>ABOUT US</Link>{menu === 'aboutus' ? <hr /> : null}</li>
                <li onClick={() => { setMenu('contact'); setIsMenuOpen(false); }}><Link style={{ textDecoration: 'none' }} to='/contact'>CONTACT</Link>{menu === 'contact' ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">{totalItems}</div>
            </div>
            <div className="nav-menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
        </div>
    );
}

export default Navbar;
