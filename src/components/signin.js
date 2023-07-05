import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signupActions';
import './sign.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(formData, () => {
      navigate.push('/dashboard');
    }));
    setFormData({
      email: '',
      password: ''
    });
  };

  return (

      <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <div>
              <h2>Login to rexav dashboard</h2>
          </div>
            <div>
              <label htmlFor="email">Email Address</label><br/>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder='Email'
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label><br/>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder='Password'
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button type="submit" onSubmit={handleSubmit}><b>Login</b></button>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className='spanelem'>
              <span> Don't have an account?  <a href='/'>Sign up for rexav</a></span>
            </div>
          </form>
            
      </div>
  );
};

export default Signin;