import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            // Configura los parámetros para EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_name: "CORDIPRODDHH",
                to_email: "contacto@cordiproddhh.com",
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                'service_w4xcmod', // Reemplaza con tu Service ID de EmailJS
                'template_n2kxhtd', // Reemplaza con tu Template ID de EmailJS
                templateParams,
                'hYiOkM6l85vxt1b_c' // Reemplaza con tu Public Key de EmailJS
            );

            setStatus({
                submitting: false,
                success: true,
                error: null
            });

            // Limpiar el formulario después del envío exitoso
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            setStatus({
                submitting: false,
                success: false,
                error: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.'
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-orange-500 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center">
                        <Fade direction='up' triggerOnce>
                            <h1 className="text-5xl font-raleway font-bold text-white leading-tight mb-6">
                                Contáctenos
                            </h1>
                            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                                ¿Conoces casos de violación en los derechos humanos? No dudes en contactarnos, estaremos siempre prestos a servir.
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

            {/* Contact Section */}
            <section className="relative bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <Fade direction='up' triggerOnce>
                                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Información de Contacto</h2>
                                    <p className="text-gray-600 mb-8">
                                        La defensa y protección de los derechos humanos es nuestra prioridad.
                                    </p>
                                </Fade>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <Fade direction='up' triggerOnce>
                                            <p className="text-gray-800 font-medium">Teléfonos</p>
                                            <p className="text-gray-600">3504462833 - 3177877016</p>
                                        </Fade>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <Fade direction='up' triggerOnce>
                                            <p className="text-gray-800 font-medium">Correo Electrónico</p>
                                            <p className="text-gray-600">cordiproddhh@gmail.com</p>
                                        </Fade>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <Fade direction='up' triggerOnce>
                                            <p className="text-gray-800 font-medium">Redes Sociales</p>
                                            <div className="flex space-x-4 mt-2">
                                                <a href="https://facebook.com/cordiproddhh" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                                                    <Facebook className="w-6 h-6" />
                                                </a>
                                                <a href="https://twitter.com/cordiproddhh" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                                                    <Twitter className="w-6 h-6" />
                                                </a>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Fade direction='up' triggerOnce>
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-orange-500 mb-6">Envíanos un mensaje</h3>

                                {status.success && (
                                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                        ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                    </div>
                                )}

                                {status.error && (
                                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                                        {status.error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                            Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                            Asunto
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className={`w-full bg-orange-500 text-white px-6 py-3 rounded-full font-medium 
                                ${status.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'} 
                                transition-colors`}
                                    >
                                        {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Bottom wave connecting to footer */}
                <div className="relative h-24 mt-20">
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 100" className="fill-gray-900 w-full">
                            <path d="M0,100 C280,0 720,0 1440,100" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;