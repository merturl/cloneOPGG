import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.scss';
const Login = ({ username, password, onInputChange, onSubmit }) => {
  return (
    <div>
      <form className='login_form' onSubmit={onSubmit}>
        <svg id="ryan" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 C0,65 120,65 120,150" fill="#e0a243" stroke="#000" strokeWidth="2.5" />
          <g className="ears">
            <path d="M46,32 L46,30 C46,16 26,16 26,30 L26,32" fill="#e0a243" stroke="#000" strokeWidth="2.5" strokeLinecap="round" transform="rotate(-10,38,24)" />
            <path d="M74,32 L74,30 C74,16 94,16 94,30 L94,32" fill="#e0a243" stroke="#000" strokeWidth="2.5" strokeLinecap="round" transform="rotate(10,82,24)" />
          </g>
          <circle cx="60" cy="60" r="40" fill="#e0a243" stroke="#000" strokeWidth="2.5" />
          <g className="eyes">
            <line x1="37" x2="50" y1="46" y2="46" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <circle cx="44" cy="55" r="3" fill="#000" />
            <line x1="70" x2="83" y1="46" y2="46" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <circle cx="76" cy="55" r="3" fill="#000" />
          </g>
          <g className="muzzle">
            <path d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71" fill="#fff" />
            <path d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71" fill="#fff" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <polygon points="59,63.5,60,63.4,61,63.5,60,65" fill="#000" stroke="#000" strokeWidth="5" strokeLinejoin="round" />
          </g>
          <path d="M40,105 C10,140 110,140 80,105 L80,105 L70,111 L60,105 L50,111 L40,105" fill="#fff" />
        </svg>
        <input value={username} name="username" onChange={onInputChange} placeholder='Id' />
        <input type='password' name="password" value={password} onChange={onInputChange} placeholder='Password' />
        <button className='login' type='submit'>Login</button>
        <Link  className='cancel' to={'/'}>Cancel</Link >
      </form>
    </div>
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func
}



export default Login;

