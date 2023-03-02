/* eslint-disable no-alert */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postUser } from '../../redux/reducers/users';

const SignUp = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match');
    } else if (userData.password.length === 0) {
      alert('Password cannot be empty');
    } else if (userData.name.length === 0) {
      alert('Name cannot be empty');
    } else if (userData.email.length === 0) {
      alert('Email cannot be empty');
    } else {
      dispatch(postUser(userData));
    }
  };

  return (
    <section className="signup">
      <div className="absolute bg-center bg-cover bg-home h-full w-full bg-orange bg-blend-multiply blur-sm" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form className="p-4 sm:p-24 bg-black flex flex-col justify-center items-center gap-4 opacity-60 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="text-4xl text-white font-ubuntu">Sign Up</h1>
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="name" type="text" id="name" placeholder="Name" onChange={handleChange} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="email" type="email" id="email" placeholder="Email" onChange={handleChange} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="password" type="password" id="password" placeholder="Password" onChange={handleChange} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          <button type="submit" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl" id="signupButton">SIGN UP</button>
        </form>
        <div className="absolute top-0 left-5 sm:left-20 flex gap-4">
          <Link to="/">
            <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">HOME</button>
          </Link>
        </div>
        <div className="absolute top-0 right-5 sm:right-20 flex gap-4">
          <Link to="/login">
            <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">LOGIN</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
