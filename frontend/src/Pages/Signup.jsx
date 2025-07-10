import React, { useState } from 'react';
import './CSS/Loginsign.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
 const [phone, setPhone] = useState('');
const [selectedState, setSelectedState] = useState('');
const [selectedDistrict, setSelectedDistrict] = useState('');
const [selectedCity, setSelectedCity] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const stateOptions = {
  Maharashtra: {
    Nagpur: ['Nagpur City', 'Hingna'],
    Pune: ['Pune City', 'Hinjewadi'],
  },
  Karnataka: {
    Bangalore: ['Bangalore Urban', 'Whitefield'],
    Mysore: ['Mysore City'],
  }
};

const states = Object.keys(stateOptions);
const districts = selectedState ? Object.keys(stateOptions[selectedState]) : [];
const cities = selectedDistrict ? stateOptions[selectedState][selectedDistrict] : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/v1/auth/signup', {   
        name,
        email,
        password,
        phone,
        state: selectedState,
        district: selectedDistrict,
        city: selectedCity})
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => {
        alert(err.response.data.message)
        console.log(err)
      });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

  <select value={selectedState} onChange={(e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
    setSelectedCity('');
  }}>
    <option value="">Select State</option>
    {states.map(state => (
      <option key={state} value={state}>{state}</option>
    ))}
  </select>

  <select value={selectedDistrict} onChange={(e) => {
    setSelectedDistrict(e.target.value);
    setSelectedCity('');
  }} disabled={!selectedState}>
    <option value="">Select District</option>
    {districts.map(district => (
      <option key={district} value={district}>{district}</option>
    ))}
  </select>

  <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedDistrict}>
    <option value="">Select City</option>
    {cities.map(city => (
      <option key={city} value={city}>{city}</option>
    ))}
  </select>
</div>

          <button type="submit" className="submit-btn">Continue</button>
        </form>
        <p className='loginsignup-login'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
