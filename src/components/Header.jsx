import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    // Animación para el menú móvil
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            x: '100%',
            transition: {
                type: "tween",
                duration: 0.3
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.3
            }
        }
    };

    // Animación para los elementos del menú
    const menuItemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    // Estilo activo para los enlaces
    const activeStyle = "text-gray-200 border-b-2 border-white";
    const normalStyle = "hover:text-gray-200";

    return (
        <header className="bg-orange-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top contact bar (Same as before) */}
                <div className="hidden sm:flex justify-between items-center py-2 text-white text-sm border-b border-orange-400">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>317-787-7016</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>cordiproddhh@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://facebook.com/cordiproddhh" className="hover:text-gray-200">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com/cordiproddhh" className="hover:text-gray-200">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <NavLink
                            to="/contacto"
                            className="bg-white text-orange-500 px-4 py-1 rounded text-sm hover:bg-gray-100 font-raleway"
                        >
                            Contáctenos
                        </NavLink>
                    </div>
                </div>

                {/* Main navigation (Same as before) */}
                <nav className="flex justify-between items-center py-4">
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313765/WhatsApp_Image_2024-10-30_at_10.33.32_AM_1_obbde7.png"
                            alt="CORDIPRODDHH Logo"
                            className="h-20"
                        />
                    </NavLink>

                    {/* Desktop Menu (Same as before) */}
                    <div className="hidden md:flex space-x-8 text-white font-raleway font-medium">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/acerca"
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            Acerca de nosotros
                        </NavLink>
                        <NavLink
                            to="/trabajo"
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            Nuestro trabajo
                        </NavLink>
                        <NavLink
                            to="/actividades"
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            Actividades
                        </NavLink>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            Contáctenos
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Animated Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 bg-orange-500 z-50 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full">
                            <button
                                onClick={toggleMenu}
                                className="absolute top-6 right-6 text-white p-2"
                            >
                                <X size={24} />
                            </button>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col items-center space-y-8 text-white font-raleway text-2xl"
                            >
                                <motion.div
                                    custom={1}
                                    variants={menuItemVariants}
                                >
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? activeStyle : normalStyle}
                                        onClick={toggleMenu}
                                    >
                                        Inicio
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={2}
                                    variants={menuItemVariants}
                                >
                                    <NavLink
                                        to="/acerca"
                                        className={({ isActive }) => isActive ? activeStyle : normalStyle}
                                        onClick={toggleMenu}
                                    >
                                        Acerca de nosotros
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={3}
                                    variants={menuItemVariants}
                                >
                                    <NavLink
                                        to="/trabajo"
                                        className={({ isActive }) => isActive ? activeStyle : normalStyle}
                                        onClick={toggleMenu}
                                    >
                                        Nuestro trabajo
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={4}
                                    variants={menuItemVariants}
                                >
                                    <NavLink
                                        to="/actividades"
                                        className={({ isActive }) => isActive ? activeStyle : normalStyle}
                                        onClick={toggleMenu}
                                    >
                                        Actividades
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={5}
                                    variants={menuItemVariants}
                                >
                                    <NavLink
                                        to="/contacto"
                                        className={({ isActive }) => isActive ? activeStyle : normalStyle}
                                        onClick={toggleMenu}
                                    >
                                        Contáctenos
                                    </NavLink>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;