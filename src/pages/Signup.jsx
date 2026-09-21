import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const API = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    setError(false);
    setMessage('');

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError(true);
      setMessage('All Fields Are Required!');
      return;
    }

    if (form.password === form.confirmPassword) {
      setError(false);
    } else {
      setError(true);
      setMessage('Your Password and Confirm Password are not Matched!');
      return;
    }

    try {

      setError(false);
      setMessage('')

      const res = await axios.post(
        `${API}/auth/signup`,
        {
          name: form.name,
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );

      console.log(res.data);

      setMessage(res.data.message);

    } catch (err) {
      setError(true);
      console.log("Login error:", err);

      setMessage(
        err.response?.data?.message ||
        "Login Failed! Please check your credentials and try again."
      );

      return;
    }
    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    setTimeout(() => {
      navigate('/login');
    }, 3000);

  };


  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create an Account
      </h2>
      <p className="text-center text-gray-500 mt-1 mb-6">
        Join us today
      </p>

      <form onSubmit={formSubmit} className="space-y-4">
        {/* {error && (
          <p className="w-full text-center text-sm font-semibold border rounded-md py-2 ${error ? 'text-red-600 bg-red-300' : 'text-green-600 bg-green-300'}npm run dev">{error}</p>
        )} */}
        {message && (
          <p className={`w-full text-center text-sm font-semibold border rounded-md py-2 ${error ? 'text-red-600 bg-red-300' : 'text-green-600 bg-green-300'}`}>{message}</p>
        )}

        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="******"
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <input type="checkbox" />
          <p className="text-gray-600">
            I agree to the{" "}
            <span className="text-indigo-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-indigo-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Signup
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600">
          Login
        </Link>
      </p>
    </div>
  );
}