import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

const loadingAnimationData = 'https://lottie.host/c3af2b9a-86e8-43a8-8ec0-cb9bb0db28cc/f9mdFcSb56.json';

function Login({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(loadingAnimationData)
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log('Signing in with:', { username, password }); // Log the request payload

    try {
      const response = await axios.post('http://localhost:3000/signin', { username, password });
      console.log('Sign In Response:', response.data); // Log the response data

      setTimeout(() => {
        setLoading(false);
        if (response.data.success) {
          onLogin();
          navigate('/home');
        } else {
          setErrorMessage(response.data.message || 'Sign In Failed');
        }
      }, 2000); // Change the duration here if needed
    } catch (error) {
      console.error('Sign In Error:', error.response || error.message); // Log detailed error info
      setLoading(false);
      setErrorMessage('Sign In Error');
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/signup', { username, password, email });
      setTimeout(() => {
        setLoading(false);
        if (response.data.success) {
          setIsSignUp(false);
          setErrorMessage('');
        } else {
          setErrorMessage(response.data.message || 'Sign Up Failed');
        }
      }, 2000); // Change the duration here if needed
    } catch (error) {
      console.error('Sign Up Error', error);
      setLoading(false);
      setErrorMessage('Sign Up Error');
    }
  };

  if (loading) {
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        {animationData && <Lottie options={loadingOptions} height={300} width={300} />}
      </div>
    );
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="shadow w-50 bg-white rounded p-3">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
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
          <button className="btn btn-primary mt-2" type="submit">
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
