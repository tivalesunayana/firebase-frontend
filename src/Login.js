import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      alert('User logged in successfully')
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
        <div className="innerBox">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
            Already have an account?{" "}
            <span>
              <Link to="/regi">Sign up</Link>
            </span>
          </p>
      </div>
    </div>
  );
};

export default Login;
