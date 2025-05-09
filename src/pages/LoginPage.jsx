import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
    const [error, setError] = useState("");
    const { loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user.emailVerified) {
                    Swal.fire("Success", "Login successful!", "success");
                    navigate(location.state?.from || "/");
                } else {
                    Swal.fire("Warning", "Please verify your email before logging in.", "warning");
                }
            })
            .catch((error) => {
                setError(error.message || "Login failed");
                Swal.fire("Error", error.message, "error");
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                Swal.fire("Success", "Google Login successful!", "success");
                navigate(location.state?.from || "/");
            })
            .catch(err => {
                // console.error(err.message);
                Swal.fire("Error", err.message, "error");
            });
    };

    return (
        <>
            <Helmet>
                <title>App Store || Login</title>
            </Helmet>
            <div className="bg-white flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-8 space-y-6">
                    <div className="flex justify-center">
                        <img className='h-10' src={logo} alt="Logo" />
                    </div>

                    <h2 className="text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>

                    <form onSubmit={handleLogin} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Link to="/forgot" className="text-sm text-indigo-600 hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 "
                            >
                                Sign in
                            </button>
                        </div>

                        <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                    </form>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <p className="text-center text-sm text-gray-500">
                        Don’t have an account? <Link to="/signup" className='text-blue-400 hover:text-blue-300'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
