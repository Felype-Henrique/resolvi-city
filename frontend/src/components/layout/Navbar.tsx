import React from "react";

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h1 className="bg-linear-45 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent text-4xl font-bold">ResolviCity</h1>
            <nav>
                <ul className="flex gap-12">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-bold">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-bold">Reportar Problemas</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-bold">Lista de Problemas</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-bold">Votações</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-bold">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
