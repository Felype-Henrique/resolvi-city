import React from "react";

const Highlights: React.FC = () => {
    return (
        <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: "Reporte Problemas", text: "Ajude a cidade a identificar problemas rapidamente." },
                { title: "Vote em Melhorias", text: "Participe das decisões do seu bairro." },
                { title: "Acompanhe o Status", text: "Veja o andamento das solicitações da comunidade." }
            ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg text-center border border-gray-300">
                    <h3 className="text-2xl font-semibold text-gray-700">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
            ))}
        </section>
    );
};

export default Highlights;
