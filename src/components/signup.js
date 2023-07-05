import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signupActions';
import './sign.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    password: '',
    confirm:''
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
      navigate.push('/signin');
    }));
    setFormData({
      name: '',
      email: '',
      phone:'',
      password: '',
      confirm:''
    });
  };

  return (

      <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <div>
              <h2>Sign up for a rexav Account</h2>
          </div>
            <div>
              <label htmlFor="name">What's your name:</label><br/>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder='Full Name'
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">what's your email:</label><br/>
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
              <label htmlFor="phone">what's your phone number:</label><br/>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder='Phone'
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Create Password:</label><br/>
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
              <label htmlFor="confirm">Confirm Password:</label><br/>
              <input
                type="password"
                id="confirm"
                name="confirm"
                value={formData.confirm}
                placeholder='password'
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button type="submit" onSubmit={handleSubmit}><b>Sign Up</b></button>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className='spanelem'>
              <span>Have an account ? <a href='/signin'>Login</a></span>
            </div>
          </form>
          
      </div>
  );
};

export default Signup;
