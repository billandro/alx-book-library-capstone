import logo from '../assets/logo.png';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import SearchBar from './SearchBar';
import BookDetailsPage from './BookDetailsPage'

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    };

    const handleCloseLogin = () => {
        setIsLoginOpen(false);
    };

    const handleForgotPasswordClick = () => {
        setIsForgotPasswordOpen(true);
    };

    const handleCloseForgotPassword = () => {
        setIsForgotPasswordOpen(false);
    };

    const handleForgotPassword = () => {
        setIsLoginOpen(false);
        handleForgotPasswordClick();
    };

    const handleSignUpClick = () => {
        setIsSignUpOpen(true);
    };

    const handleCloseSignUp = () => {
        setIsSignUpOpen(false);
    };

    const handleSearch = (query) => {
        if (!query) {
            console.log('Query is empty');
            return; // Avoid making API calls with an empty query
        }
        console.log('Query:', query);
        navigate(`/search/${encodeURIComponent(query)}`);
    };
    
    return (
        <header className="h-auto w-full bg-green-700 sm:px-24 py-4 mt-auto">
            <nav className="items-center justify-between hidden sm:flex gap-4 font-semibold">
                <img src={logo} alt="logo" className="flex flex-shrink mr-auto" />
                <SearchBar placeholder="Search for books" onSearch={handleSearch} />
                <ul className="flex flex-row items-center justify-between sm:w-fit gap-4">
                    <li className="transition ease-in-out hover:opacity-80 text-white text-base">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <button
                            onClick={handleLoginClick}
                            className="transition ease-in-out hover:scale-110 duration-300 text-white rounded hover:bg-white hover:text-green-700 p-2">
                            Login
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSignUpClick}
                            className="border-2 border-black transition ease-in-out hover:scale-110 duration-300 text-white rounded hover:bg-black p-2 hover:text-green">
                            Sign up
                        </button>
                    </li>
                </ul>
            </nav>
            <nav className="sm:hidden flex flex-row justify-between items-center font-semibold px-3">
                <img src={logo} alt="logo" className="w-15 h-10 sm:w-0" />
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="sm:hidden font-bold text-xl hover:text-white-500"
                >
                    {showMenu ? <GrClose /> : <GiHamburgerMenu />}
                </button>
                {showMenu && (
                    <div className="flex flex-col items-center w-full mt-4">
                        <SearchBar placeholder="Search books..." onSearch={handleSearch} />
                        <NavLink exact to="/" className="text-white">Home</NavLink>
                        <button className="text-white" onClick={handleLoginClick}>Login</button>
                        <button className="text-white" onClick={handleSignUpClick}>Sign up</button>
                    </div>
                )}
            </nav>

            {/* Login overlay */}
            {isLoginOpen && <Login handleClose={handleCloseLogin} handleForgotPassword={handleForgotPassword} />}
            {isForgotPasswordOpen && <ForgotPassword handleClose={handleCloseForgotPassword} />}
            {isSignUpOpen && <SignUp handleClose={handleCloseSignUp} />}
        </header>
    );
}

export default Header