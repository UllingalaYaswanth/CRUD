import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signin', { username, password });
      if (response.data.success) {
        navigate('/home');
      } else {
        setErrorMessage(response.data.message || 'Sign In Failed');
      }
    } catch (error) {
      console.error('Sign In Error', error);
      setErrorMessage('Sign In Error');
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', { username, password, email });
      if (response.data.success) {
        setIsSignUp(false);
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.message || 'Sign Up Failed');
      }
    } catch (error) {
      console.error('Sign Up Error', error);
      setErrorMessage('Sign Up Error');
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="shadow w-50 bg-white rounded p-3">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {isSignUp && (
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignUp && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button className="btn btn-primary mt-2" onClick={isSignUp ? handleSignUp : handleSignIn}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button className="btn btn-link mt-2" onClick={() => {
          setIsSignUp(!isSignUp);
          setErrorMessage('');
        }}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
      
  </div>
    
  );
}

export default Login;
