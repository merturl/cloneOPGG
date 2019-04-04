import React from 'react';
import './Header.scss';

const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">
    {children}
  </div>
)

const Header = ({ children }) => {
  return (
    <div className='header'>
      <div className='left-section'>
        <div className='toolbar'>burgur</div>
      </div>
      <div className='mid-section'>
        <div className='logo'>merturl</div>
      </div>
      <div className='right-section'>
        {children.map((menu) => <MenuItem key={menu.id} title={menu.title}>{menu.title}</MenuItem>)}
      </div>
      <i className="fa fa-align-justify"></i>
    </div>
  )
}

export default Header;
