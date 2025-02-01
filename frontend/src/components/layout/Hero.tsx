import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="text-center py-40 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white">
            <h2 className="text-5xl font-bold">Conecte-se à sua cidade!</h2>
            <p className="mt-4 text-lg">
                Reporte problemas urbanos e vote em melhorias para sua comunidade.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-200">
                Reportar um Problema
            </button>
        </section>
    );
};

export default Hero;
