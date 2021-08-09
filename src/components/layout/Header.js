import React from 'react';
import PropTypes from 'prop-types';
import HeaderImg from '../../assests/images/Running.png';

const Header = (props) => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <img src={HeaderImg} alt='' width='50' height='50' />{' '}
        <a className='navbar-brand' href='#'>
          Calisthenics
        </a>
        <div class='collapse navbar-collapse'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Exercises
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Videos
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Nutrition Plan
              </a>
            </li>
          </ul>
          <form class='d-flex'>
            <input
              class='form-control me-2'
              type='search'
              placeholder='Search for exercise'
              aria-label='Search'
            />
            <button class='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
