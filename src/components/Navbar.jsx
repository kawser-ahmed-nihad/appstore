import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        // console.log("user trying to LogOut");
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you really want to log out?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, log out!'
                }
                )
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='bg-[#F3F3F3]'>
            <nav className="hidden md:flex max-w-11/12 mx-auto items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <img src={logo} alt="AppStore Logo" className="w-auto h-10 object-cover" />
                </div>

                <ul className="flex gap-6 text-gray-700 text-base font-medium">
                    <li><NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Home</NavLink></li>
                    <li><NavLink onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Contact</NavLink></li>
                    {
                        user && <li><NavLink onClick={() => setOpen(false)} to="/Profile" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Profile</NavLink></li>
                    }
                </ul>

                <div className='flex items-center space-x-2'>
                    <div className="flex items-center border rounded-full px-4 py-2 w-60 shadow-sm">
                        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
                        </svg>
                        <input type="text" placeholder="App Store" className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-400 text-sm w-full" />
                    </div>

                    <div className="login-btn flex items-center gap-3">
                        {user && (
                            <>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-gray-700 text-sm">{user.email}</span>
                            </>
                        )}

                        {user ? (
                            <button onClick={handleLogOut} className="btn btn-primary px-5 py-1 border-0 bg-green-500 text-white rounded">
                                LogOut
                            </button>
                        ) : (
                            <Link to="/login" className="btn btn-primary px-5 py-1 bg-green-500 border-0 text-white rounded">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <nav className=" md:hidden flex max-w-11/12 mx-auto items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <img src={logo} alt="AppStore Logo" className="w-auto h-6 object-cover" />
                </div>

                <div className='flex items-center space-x-2'>
                    <div className="flex items-center border rounded-full px-4 py-2 w-60 shadow-sm">
                        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
                        </svg>
                        <input type="text" placeholder="App Store" className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-400 text-sm w-full" />
                    </div>

                    <button onClick={() => setOpen(!open)}>
                        {open ? <IoClose size={24} /> : <CiMenuFries size={24} />}
                    </button>
                </div>
                <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-lg`}>

                    <div className="flex justify-end p-4">
                        <button onClick={() => setOpen(false)}>
                            <IoClose size={24} />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-6 p-6">
                        {user && (
                            <>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-gray-700 text-sm">{user.email}</span>
                            </>
                        )}
                        <li><NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Home</NavLink></li>
                        <li><NavLink onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Contact</NavLink></li>
                        {
                            user && <li><NavLink onClick={() => setOpen(false)} to="/Question" className={({ isActive }) => isActive ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-700'}>Profile</NavLink></li>
                        }
                        {user ? (
                            <button onClick={handleLogOut} className="btn btn-primary px-5 py-1 bg-indigo-600 text-white rounded">
                                LogOut
                            </button>
                        ) : (
                            <Link to="/login" className="btn btn-primary px-5 py-1 bg-indigo-600 text-white rounded">
                                Login
                            </Link>
                        )}

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;


