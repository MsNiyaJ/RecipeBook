import React, { useState } from 'react';
import LinkButton from './LinkButton';
import TextInput from './TextInput';
import { GetUsers } from '../services/HTTPLibrary';

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [passwordType, setPasswordType] = useState('password');
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const onChange = (e) => {
    // Store all the current data and the new value in the state
    setData({ ...data, [e.target.name]: e.target.value });

    // Remove any error messages when the user starts typing
    setError(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = data;

    GetUsers().then((data) => {
      const users = data.response;

      // Filter the users to find the user with the matching email and password
      const user = users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (user) {
        // redirect to the home page
        window.location.href = '/';
        console.log('User logged in:', user);
      } else {
        setError('Invalid email or password');
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-red-600 py-20">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center bg-white rounded-lg max-w-sm py-12"
      >
        <img
          src="/images/logos/transparent-logo.png"
          alt="logo"
          className="w-20 h-20 bg-black rounded-full self-center mt-5"
        />
        <h1 className="text-4xl self-center py-6">Login</h1>
        {error && <p className="text-red-600">{error}</p>}
        <div className="self-center px-10">
          <TextInput
            name="email"
            type="email"
            label="Email"
            required={true}
            asterisk={false}
            max={100}
            value={data.email}
            onChange={onChange}
          />
          <TextInput
            name="password"
            label="Password"
            type={passwordType}
            required={true}
            asterisk={false}
            max={100}
            value={data.password}
            onChange={onChange}
          />
          <input
            id="showPassword"
            name="showPassword"
            type="checkbox"
            className="accent-black"
            onChange={togglePasswordVisibility}
          />
          <label htmlFor="showPassword">&nbsp; Show Password</label>
          <button
            type="submit"
            className="bg-red-600 hover:bg-white hover:text-black border hover:border-black p-3 w-full text-white mt-4 mb-8 rounded-lg"
          >
            Submit
          </button>
          <p>
            Don't have an account?&nbsp;
            <LinkButton
              link={'/signup'}
              buttonStyle="text-red-600 hover:text-red-300"
              buttonContent={<span>Sign Up</span>}
            />
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
