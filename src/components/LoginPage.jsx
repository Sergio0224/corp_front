import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("https://cordiproddhh-back.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include", // Importante para manejar cookies
                cache: "no-store"
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error en la respuesta del servidor");
            }

            const data = await res.json();

            if (data.success) {
                // Guardamos el token en localStorage
                localStorage.setItem("token", data.token);

                // También podemos guardar información adicional del usuario si la API la proporciona
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                // Redirigimos al dashboard usando React Router
                navigate("/dashboard", { replace: true });
            } else {
                setError(data.message || "Error al iniciar sesión");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error al conectar con el servidor");
            }
            console.error("Error durante el login:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div>
                    <img
                        src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313765/WhatsApp_Image_2024-10-30_at_10.33.32_AM_1_obbde7.png"
                        alt="Logo"
                        className="mx-auto h-24 w-auto"
                    />
                    <h2 className="mt-6 text-center text-3xl font-raleway font-bold text-orange-500">
                        Iniciar Sesión
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
                    >
                        {loading ? "Cargando..." : "Iniciar Sesión"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;