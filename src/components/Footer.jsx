import React from 'react';
import { Phone, Mail, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="mb-4">
                            <img
                                src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313765/WhatsApp_Image_2024-10-30_at_10.33.32_AM_1_obbde7.png"
                                alt="CORDIPRODDHH Logo"
                                className="h-16"
                            />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Corporación dirigida en la protección y defensa de los derechos humanos de la región.
                        </p>
                        <p className="text-gray-400">NIT 901868466-2</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-raleway font-bold mb-4 text-orange-500">Contacto</h3>
                        <div className="space-y-2 text-gray-400">
                            <p className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                350 446 2833
                            </p>
                            <p className="flex items-center">
                                <Mail className="w-5 h-5 mr-2" />
                                cordiproddhh@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-raleway font-bold mb-4 text-orange-500">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com/cordiproddhh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com/cordiproddhh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;