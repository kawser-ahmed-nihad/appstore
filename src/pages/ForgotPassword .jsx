import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire("Warning", "Please enter your email", "warning");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire("Success", "Password reset email sent!", "success");
                setEmail(""); 
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    };

    return (
        <>
            <Helmet>
                <title>App Store || Forgot Password</title>
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form onSubmit={handleReset} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-xl font-bold mb-4 text-center">Reset Your Password</h2>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded transition duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
