import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setShowLogin, isPage }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/Vojon/Backend/Login.php', {
        email: formData.email,
        password: formData.password,
        role: 'user'
      });

      if (response.data.status === 'success') {
        toast.success('Login successful!');
        localStorage.setItem('userToken', 'true');
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        if (setShowLogin) setShowLogin(false);
        if (isPage) navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Login failed! Please check your credentials.');
    }
  };

  const loginBox = (
    <div className={`relative w-full max-w-sm bg-white p-6 rounded-xl shadow-lg z-10 ${isPage ? 'mx-auto my-auto mt-20' : ''}`}>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Login</h2>
        {!isPage && (
          <RxCross2
            className="text-gray-500 cursor-pointer text-xl"
            onClick={() => {
              setShowLogin(false);
            }}
          />
        )}
      </div>

      <form onSubmit={handleLogin}>
        {/* Email Input */}
        <label className="block mb-2 text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
          className="w-full border p-2 mb-4 rounded focus:outline-none"
        />

        {/* Password Input */}
        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
          className="w-full border p-2 mb-4 rounded focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Login
        </button>
      </form>

      {isPage && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register here
            </Link>
          </p>
        </div>
      )}
    </div>
  );

  if (isPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {loginBox}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* 🔥 Background Blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => setShowLogin(false)}
      ></div>

      {loginBox}
    </div>
  );
};

export default Login;