import React , {useRef} from 'react';
import Logo from '../assets/images/logo.png';
import Data1 from '../assets/images/cart-item-1.png';
const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navRef = useRef();
    const searchHandler =  () => {
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navRef.current.classList.remove("active");
    };
    const cartHandler =  () => {
        cartRef.current.classList.toggle("active");
        navRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    };
    const navHandler =  () => {
        navRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");        
        searchRef.current.classList.remove("active");
    };
    
  return (
    <>
      <header className='header'>
        <a href='#' className='logo'>
            <img src={Logo} />
        </a>
        <nav className='navbar' ref={navRef}>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </nav>
        <div className='icons'>
            <div className='fas fa-search' id='search-btn' onClick={searchHandler}></div>
            <div className='fas fa-shopping-cart' id='cart-btn' onClick={cartHandler}></div>
            <div className='fas fa-bars' id='menu-btn' onClick={navHandler}></div>
        </div>
        <div className='search-form' ref={searchRef}>
            <input type='search' placeholder='Search here ...' id='search-box' />
            <label htmlFor="search-box"  className='fas fa-search'></label>
        </div>
        <div className='cart-items-container' ref={cartRef}>
            <div className='cart-item'>
                <span className='fas fa-times'></span>
                <img src={Data1} alt="item-1" />
                <div className='content'>
                    <h3>cart item 01</h3>
                    <div className="price">$15.99/-</div>
                </div>
            </div>
            <a href="#" className="btn">checkout now</a>
        </div>
      </header>
    </>
  )
}

export default Navbar
