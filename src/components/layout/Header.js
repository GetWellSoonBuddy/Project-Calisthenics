import React from 'react';
import PropTypes from 'prop-types';
import HeaderImg from '../../assests/images/Running.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <img src={HeaderImg} alt='' width='50' height='50' />{' '}
        <a className='navbar-brand' href='#'>
          Calisthenics
        </a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Exercises
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Videos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Nutrition Plan
              </a>
            </li>
          </ul>
          {/* <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search for exercise'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form> */}
          <Link to='/login' className='btn btn-dark'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
