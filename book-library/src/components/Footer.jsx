import linkedin from "../assets/icons8-linkedin-40.png";
import twitter from "../assets/icons8-twitter-circled-40.png";
import github from "../assets/icons8-github-40.png";
import ContactPage from "./ContactPage";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-white w-full flex flex-col items-center bg-green-700 mt-auto">
            <div className="flex flex-row w-full px-2 justify-evenly items-center mb-5">
                <div className="text-slate-300 text-center font-light text-base mt-6">
                    <h1 className="text-xl font-normal mb-1">Quick Links</h1>
                    <p className="hover:opacity-50 cursor-pointer mb-0.5"><NavLink exact to="/">Home</NavLink></p>
                    <p className="hover:opacity-50 cursor-pointer mb-0.5">Login</p>
                    <p className="hover:opacity-50 cursor-pointer mb-0.5"><NavLink to="/ContactPage">Contact</NavLink></p>
                </div>
                <div className="flex flex-row gap-4">
                    <a href="https://github.com/billandro" target="_blank" rel="noopener noreferrer"><img src={ github } alt="Github" className="cursor-pointer" /></a>
                    <a href="https://www.linkedin.com/in/bill-qubeka/" target="_blank" rel="noopener noreferrer"><img src={ linkedin } alt="LinkedIn" className="cursor-pointer" /></a>
                    <a href="http://x.com/Bill_Qubeka" target="_blank" rel="noopener noreferrer"><img src={ twitter } alt="Twitter" className="cursor-pointer" /></a>
                </div>
            </div>
            <p className="text-slate-300 text-sm mb-3">Copyright &copy; <a href="https://github.com/billandro/alx-book-library-capstone" target="_blank" className="hover:opacity-50">Bill Qubeka</a></p>
        </footer>
    );
}

export default Footer