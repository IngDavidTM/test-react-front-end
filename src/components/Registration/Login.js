import { Link } from 'react-router-dom';

const Login = () => (
  <section className="login">
    <div className="absolute bg-center bg-cover bg-home h-full w-full bg-orange bg-blend-multiply blur-sm" />
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <form className="p-4 sm:p-24 bg-black flex flex-col justify-center items-center gap-4 opacity-60 rounded-lg">
        <h1 className="text-4xl text-white font-ubuntu">Login</h1>
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="email" id="email" placeholder="Email" />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="password" id="password" placeholder="Password" />
        <button type="submit" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl">LOGIN</button>
      </form>
      <div className="absolute top-0 left-5 sm:left-20 flex gap-4">
        <Link to="/">
          <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">HOME</button>
        </Link>
      </div>
      <div className="absolute top-0 right-5 sm:right-20 flex gap-4">
        <Link to="/signup">
          <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">SIGN UP</button>
        </Link>
      </div>
    </div>
  </section>
);

export default Login;
