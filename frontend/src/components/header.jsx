import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-[#121212] fixed top-0 left-0 pt-5 pb-5 px-12 flex justify-between items-center z-50">
            <h1 className="text-2xl font-extrabold text-[#FF8C00] tracking-wide">AryaVerse</h1>
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-white text-lg font-medium">
                    <li><a href="#intro" className=" text-white hover:text-[#FFA500] text-xl font-extrabold transition-all duration-300">Introduction</a></li>
                    <li><a href="#skills" className="text-white hover:text-[#FFA500] text-xl font-extrabold transition-all duration-300">Skills</a></li>
                    <li><a href="#resume" className="text-white hover:text-[#FFA500] text-xl font-extrabold transition-all duration-300">Resume</a></li>
                    <li><a href="#contact" className="text-white hover:text-[#FFA500] text-xl font-extrabold transition-all duration-300">Contact</a></li>
                </ul>
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#000000] md:hidden text-white text-l focus:outline-none" >{isOpen? "❌":"☰"}</button>
            
            <div className={`absolute top-16 right-8 bg-[#1E1E1E] p-5 rounded-lg shadow-md md:hidden transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                <ul className="flex flex-col space-y-4 text-white text-lg">
                    <li><a href="#intro" className="hover:text-[#FFA500] transition-all duration-300" onClick={() => setIsOpen(false)}>Introduction</a></li>
                    <li><a href="#skills" className="hover:text-[#FFA500] transition-all duration-300" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#resume" className="hover:text-[#FFA500] transition-all duration-300" onClick={() => setIsOpen(false)}>Resume</a></li>
                    <li><a href="#contact" className="hover:text-[#FFA500] transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;