import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-500 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center font-bold text-3xl text-orange-500 mb-6">Registration</h1>
        <form className="flex flex-col gap-5">
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            name="Username"
            id="name"
            placeholder="Username"
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-700">
          Already have an account?{' '}
          <Link to="/Signin" className="text-orange-500 font-medium underline hover:text-orange-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
