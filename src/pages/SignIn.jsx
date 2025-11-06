import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-500 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center font-bold text-3xl text-orange-500 mb-6">Sign In</h1>
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-orange-500 font-medium underline hover:text-orange-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
