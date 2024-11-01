import React from 'react';
import { Fade } from "react-awesome-reveal";

const OurWorkPage = () => {
    const services = [
        {
            "title": "Defensa Legal",
            "description": "Brindamos asesoría especializada y protección integral de derechos humanos, con acompañamiento continuo a personas amenazadas.",
            "details": [
                "Asesoría legal personalizada",
                "Protección de víctimas",
                "Seguimiento de casos"
            ]
        },
        {
            "title": "Educación y Capacitación",
            "description": "Desarrollamos programas de capacitación, fortalecimiento e investigación en derechos humanos para comunidades.",
            "details": [
                "Talleres comunitarios",
                "Programas de investigación",
                "Fortalecimiento de líderes sociales"
            ]
        },
        {
            "title": "Ayuda Humanitaria",
            "description": "Ofrecemos atención a víctimas, activación de rutas de protección y seguimiento continuo de procesos.",
            "details": [
                "Atención integral a víctimas",
                "Activación de rutas institucionales",
                "Acompañamiento psicosocial"
            ]
        }
    ];

    const getServiceIcon = (index) => {
        switch (index) {
            case 0:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                );
            case 1:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                );
            case 2:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section with Wave at bottom */}
            <section className="relative bg-orange-500 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center">
                        <Fade direction='up' triggerOnce>
                            <h1 className="text-5xl font-raleway font-bold text-white leading-tight mb-6">
                                Nuestro Trabajo
                            </h1>
                            <p className="text-white text-lg max-w-2xl mx-auto">
                                Descubre cómo trabajamos para proteger y promover los derechos humanos en nuestra región.
                            </p>
                        </Fade>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-orange-50 w-full">
                        <path d="M0,0 C280,120 720,120 1440,0 V100 H0 V0 Z" />
                    </svg>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-orange-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <Fade direction='up' triggerOnce>
                            <h2 className="text-4xl font-raleway font-bold text-orange-500 mb-4">
                                Nuestros Servicios
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Ofrecemos una defensa integral de los derechos humanos a través de servicios especializados y personalizados.
                            </p>
                        </Fade>
                    </div>
                    <Fade direction='up' triggerOnce>
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {getServiceIcon(index)}
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-raleway font-bold mb-4 text-orange-600">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-gray-900 w-full">
                        <path d="M0,100 C280,0 720,0 1440,100" />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default OurWorkPage;