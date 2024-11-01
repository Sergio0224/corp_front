import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const accordionData = [
        {
            "title": "Defensa de los Derechos Humanos",
            "content": "Contribuimos en la defensa, promoción, protección y fortalecimiento de los derechos humanos, el derecho internacional humanitario, la expansión institucional para la garantía de derechos humanos y la consolidación de la paz."
        },
        {
            "title": "Construcción de la Paz",
            "content": "Trabajamos en el acompañamiento a las personas amenazadas, desplazados por la violencia, haciendo una activación de rutas institucionales y seguimiento en los procesos con un compromiso humanista."
        },
        {
            "title": "Justicia Social",
            "content": "Desarrollamos capacitación y fortalecimiento a nuestros líderes sociales a través de los acuerdos interinstitucionales y/o convenios interadministrativos, promoviendo la justicia social y la dignificación de las personas."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section with Wave only at bottom */}
            <section className="relative bg-orange-500 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Fade direction='up' triggerOnce>
                                <h1 className="text-5xl font-raleway font-bold text-white leading-tight mb-6">
                                    Defensa Integral de los Derechos Humanos
                                </h1>
                                <p className="text-white text-lg mb-8">
                                    Somos una corporación dirigida en la protección y defensa de los derechos humanos, derecho internacional humanitario, víctimas del conflicto, lideres y lideresas sociales, ambientales y culturales de la región.
                                </p>
                                <div className="flex space-x-4">
                                    <Link className="bg-white text-orange-500 px-6 py-3 rounded-full font-raleway font-medium hover:bg-gray-100 flex items-center" to="/contacto">
                                        Únete Ahora
                                        <span className="ml-2">→</span>
                                    </Link>
                                    <Link className="border-2 border-white text-white px-6 py-3 rounded-full font-raleway font-medium hover:bg-orange-400" to="/acerca">
                                        Conoce más
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="relative">
                            <Fade direction='up' cascade triggerOnce>
                                <div className="relative w-full pt-[100%] rounded-full overflow-hidden border-8 border-white">
                                    <img
                                        src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313636/WhatsApp_Image_2024-10-30_at_10.35.16_AM_1_o04iux.jpg"
                                        alt="Derechos Humanos"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-orange-50 w-full">
                        <path d="M0,0 C280,120 720,120 1440,0 V100 H0 V0 Z" />
                    </svg>
                </div>
            </section>

            {/* Stats Section with Wave */}
            <section className="py-20 text-center relative bg-orange-50">
                <div className="max-w-lg mx-auto mb-12 relative z-10">
                    <Fade direction='up' triggerOnce>
                        <img src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313765/WhatsApp_Image_2024-10-30_at_10.33.32_AM_1_obbde7.png" alt="Logo" className="mx-auto mb-4 w-40 h-40" />
                        <p className="text-gray-500 uppercase tracking-wide font-raleway">Somos la voz de los que no tienen voz</p>
                        <h2 className="text-4xl font-raleway font-bold mt-4 text-orange-500">
                            "TUS DERECHOS Y LOS MIOS,<br />
                            NO SON NEGOCIABLES"
                        </h2>
                    </Fade>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="fill-orange-500 w-full">
                        <path d="M0,60 C360,0 1080,120 1440,60 V120 H0 V60 Z" />
                    </svg>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-orange-500 py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Fade direction='up' triggerOnce>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    "title": "Defensa Legal",
                                    "icon": <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>,
                                    "description": "Brindamos asesoría especializada y protección integral de derechos humanos, con acompañamiento continuo a personas amenazadas."
                                },
                                {
                                    "title": "Educación",
                                    "icon": <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>,
                                    "description": "Desarrollamos programas de capacitación, fortalecimiento y investigación en derechos humanos para comunidades."
                                },
                                {
                                    "title": "Ayuda Humanitaria",
                                    "icon": <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>,
                                    "description": "Ofrecemos atención a víctimas, activación de rutas de protección y seguimiento continuo de procesos."
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-orange-50 rounded-xl p-6 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border-2 border-orange-100">
                                    <div className="relative z-10">
                                        {service.icon}
                                        <h3 className="text-2xl font-raleway font-bold mb-4 text-orange-600">{service.title}</h3>
                                        <p className="text-gray-700 mb-6">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.title === "Defensa Legal" && (
                                                <>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Asesoría Legal</span>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Protección</span>
                                                </>
                                            )}
                                            {service.title === "Educación" && (
                                                <>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Capacitación</span>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Investigación</span>
                                                </>
                                            )}
                                            {service.title === "Ayuda Humanitaria" && (
                                                <>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Atención</span>
                                                    <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-sm">Seguimiento</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>

                {/* Decorative wave bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="fill-orange-50 w-full">
                        <path d="M0,60 C360,0 1080,120 1440,60 V120 H0 V60 Z" />
                    </svg>
                </div>
            </section>

            {/* Mission Section with Wave */}
            <section className="py-20 relative bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Fade direction='up' triggerOnce>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-orange-500">Nuestro Compromiso</h2>
                            <p className="text-gray-600">La defensa y protección de los derechos humanos, es nuestra prioridad</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                {accordionData.map((item, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-4">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="flex justify-between items-center w-full text-left py-2 transition-all duration-200 ease-in-out"
                                        >
                                            <span className="font-semibold text-orange-500">{item.title}</span>
                                            <span className={`text-2xl text-orange-500 transform transition-transform duration-200 ${openAccordion === index ? "rotate-45" : ""}`}>
                                                +
                                            </span>
                                        </button>
                                        <div
                                            className={`transition-all duration-200 ease-in-out overflow-hidden ${openAccordion === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                                        >
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <img
                                    src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313636/WhatsApp_Image_2024-10-30_at_10.35.16_AM_2_ipinol.jpg"
                                    alt="Misión"
                                    className="rounded-lg w-full h-[400px] object-cover"
                                />
                                <div className="absolute -right-4 -bottom-4 bg-orange-500 w-24 h-24 rounded-full" />
                            </div>
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

export default HomePage;