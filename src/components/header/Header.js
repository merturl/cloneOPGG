import React from 'react';
import './Header.scss';

const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">
    {children}
  </div>
)


const Header = ({ children }) => {
  return (
    <header className='header'>
      <div className='left-section'>
        <div className='logo'>MERTURL</div>
      </div>
      <div className='right-section'>
        {children.map((menu) => <MenuItem key={menu.id} title={menu.title}>{menu.title}</MenuItem>)}
      </div>
      <i className="fa fa-align-justify"></i>
    </header>
  )
}

export default Header;
