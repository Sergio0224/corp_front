import React from 'react';
import { Fade } from "react-awesome-reveal";

const AboutUsPage = () => {
    const principles = [
        {
            "title": "Defensa y Promoción",
            "description": "Contribuir en la defensa, promoción, protección y fortalecimiento de los derechos humanos, el derecho internacional humanitario, la expansión institucional para la garantía de derechos humanos y la consolidación de la paz."
        },
        {
            "title": "Acompañamiento",
            "description": "Acompañamiento a las personas amenazadas, desplazados por la violencia, haciendo una activación de rutas institucionales y hacer seguimiento en los procesos con un compromiso humanista."
        },
        {
            "title": "Capacitación",
            "description": "Capacitación y fortalecimiento a nuestros líderes sociales a través de los acuerdos interinstitucionales y/o convenios interadministrativos."
        }
    ];

    const getPrincipleIcon = (index) => {
        switch (index) {
            case 0:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                );
            case 1:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                );
            case 2:
                return (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
                                Acerca de Nosotros
                            </h1>
                            <p className="text-white text-lg max-w-2xl mx-auto">
                                Conoce la historia, misión y visión de CORDIPRODDHH, una organización comprometida con la defensa integral de los derechos humanos.
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

            {/* Mission and Vision Section */}
            <section className="py-20 bg-orange-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Fade direction='up' triggerOnce>
                            <div>
                                <h2 className="text-4xl font-raleway font-bold mb-6 text-orange-500">
                                    Nuestra Misión
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    La Corporación CORDIPRODDHH es una organización que trabaja en defensa, promoción y protección de los derechos humanos y el derecho internacional humanitario, apoyando la construcción de la paz, el desarrollo, el medio ambiente y la educación, a través de la experiencia, la incidencia pública, el desarrollo de los procesos territoriales y la justicia social con un enfoque humanista de la vulnerabilidad de las víctimas del conflicto.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-raleway font-bold mb-6 text-orange-500">
                                    Nuestra Visión
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Ser una organización líder en la defensa de los derechos humanos, a través de la aplicación de programas de investigación y prevención. CORDIPRODDHH contribuirá y apoyará el desarrollo de procesos. Impulsará y se consolidará como una corporación humanamente inclusiva, basada en el respeto y la dignificación de las personas.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-orange-500 w-full">
                        <path d="M0,100 C280,0 720,0 1440,100" />
                    </svg>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-20 bg-orange-500 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <Fade direction='up' triggerOnce>
                            <h2 className="text-4xl font-raleway font-bold text-white mb-4">
                                Nuestros Principios
                            </h2>
                            <p className="text-white max-w-2xl mx-auto">
                                Nuestro compromiso con la defensa de los derechos humanos se fundamenta en principios sólidos.
                            </p>
                        </Fade>
                    </div>
                    <Fade direction='up' triggerOnce>
                        <div className="grid md:grid-cols-3 gap-8">
                            {principles.map((principle, index) => (
                                <div key={index} className="bg-orange-50 rounded-xl p-6 text-center">
                                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {getPrincipleIcon(index)}
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-raleway font-bold mb-4 text-orange-600">
                                        {principle.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {principle.description}
                                    </p>
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

export default AboutUsPage;