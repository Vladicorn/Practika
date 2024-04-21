import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <div className='Header'>
        <Link className="HeaderLink" to="/">Все калькуляторы</Link>
        <Link className="HeaderLink" to="/admin">Панель админа</Link>
    </div>
  );
}

export default Header;