import React, { Fragment, useState } from 'react';
import signInLogo from '../../assests/images/Running.png';

export const Login = () => {
  const [loginForm, setloginForm] = useState({
    password: '',
    userName: '',
  });
  const onChange = (e) => {
    setloginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('successfully login and the values are ..', loginForm);
  };
  return (
    <Fragment>
      <main className='form-signin'>
        <form>
          <img
            className='mb-4'
            src={signInLogo}
            alt=''
            width='72'
            height='57'
          />
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <input
              name='userName'
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='Enter email or username'
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              name='password'
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Enter your password'
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button
            className='w-100 btn btn-lg btn-primary'
            type='submit'
            onClick={(e) => onSubmit(e)}
          >
            Sign in
          </button>
        </form>
      </main>
    </Fragment>
  );
};
