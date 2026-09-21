import { useState } from "react";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const API = import.meta.env.VITE_API_BASE_URL;

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    //   const [error, setError] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const formSubmit = async (e) => {
        setError(false);
        setMessage('');

        e.preventDefault();

        if (!form.email || !form.password) {
            setError(true);
            setMessage('All Fields Are Required!');
            return;
        }

        try {

            setError(false);
            setMessage('')

            const res = await axios.post(
                `${API}/auth/login`,
                { email: form.email, password: form.password },
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
            email: '',
            password: '',
        });

        setTimeout(() => {
            navigate('/');
        }, 3000);

    };
    return (
        <div className="min-h-screen mt-6 flex items-center flex-col justify-between">
            {/* Center Card */}
            <div className="flex-1 flex items-center justify-center px-4 w-full max-w-700 mx-auto" >
                <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-8 py-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 h-auto flex flex-col justify-center">
                    <div className="text-center mb-6">
                        <h1 className="text-[32px] leading-tight font-bold text-[#171717]">
                            Welcome Back
                        </h1>

                        <p className="text-[#6b6b6b] mt-2 text-[17px]">
                            Login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={formSubmit} className="space-y-1">

                        {message && (
                            <p className={`mb-3 text-center ${error ? 'text-red-600' : 'text-green-600'}`}>
                                {message}
                            </p>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-[18px] font-semibold text-[#1f1f1f] mb-2">
                                Email
                            </label>

                            <div className="flex items-center border border-[#d8d3e3] bg-[#f7f5fb] rounded-xl px-4 h-13.5">
                                <Mail className="w-5 h-5 text-[#7a7a7a]" />

                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-transparent outline-none px-3 text-[16px] text-[#222]"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-[18px] font-semibold text-[#1f1f1f] mb-3">
                                Password
                            </label>

                            <div className="flex items-center border border-[#d8d3e3] bg-[#f7f5fb] rounded-xl px-4 h-12.5">
                                <Lock className="w-5 h-5 text-[#7a7a7a]" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full bg-transparent outline-none px-3 text-[16px] text-[#222]"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-[#777]"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-[15px]">
                            <label className="flex items-center gap-4 text-[#5b5b5b] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-[#cfcfcf]"
                                />
                                Remember Me
                            </label>

                            <button
                                type="button"
                                className="font-semibold text-[#4f46e5] hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full h-10.5 rounded-xl bg-[#5b5ce9] hover:bg-[#4f50df] transition-all duration-300 text-white font-semibold text-[18px] flex items-center justify-center gap-4 shadow-md"
                        >
                            Login
                            <LogIn className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-[#dddddd]" />
                        <span className="text-[#666] text-sm">OR</span>
                        <div className="flex-1 h-px bg-[#dddddd]" />
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="h-12.5 border border-[#d7d7d7] rounded-xl bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 font-semibold text-[18px] text-[#222]">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Google
                        </button>

                        <button className="h-12.5 border border-[#d7d7d7] rounded-xl bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3 font-semibold text-[18px] text-[#222]">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="github"
                                className="w-5 h-5"
                            />
                            GitHub
                        </button>
                    </div>

                    {/* Signup */}
                    <p className="text-center mt-8 text-[#5f5f5f] text-[16px]">
                        Don&apos;t have an account?{" "}
                        <span className="text-[#4f46e5] font-medium cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </p>
                </div>
            </div >
        </div>
    );
};