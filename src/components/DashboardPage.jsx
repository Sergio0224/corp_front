import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Edit, Trash2, Plus, LogOut, Users } from "lucide-react";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [currentActivity, setCurrentActivity] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        images: []
    });

    const [admins, setAdmins] = useState([]);
    const [showAdminForm, setShowAdminForm] = useState(false);
    const [adminFormData, setAdminFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Función auxiliar para obtener el token
    const getAuthToken = () => {
        return localStorage.getItem("token");
    };

    // Función auxiliar para las peticiones autenticadas
    const authenticatedFetch = async (url, options = {}) => {
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            throw new Error("No auth token found");
        }

        const authenticatedOptions = {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, authenticatedOptions);

        if (response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
            throw new Error("Invalid token");
        }

        return response;
    };

    const fetchActivities = async () => {
        try {
            const res = await authenticatedFetch("https://cordiproddhh-back.onrender.com/api/activities");
            const data = await res.json();
            if (data.success) {
                setActivities(data.data);
            }
        } catch (err) {
            setError("Error al cargar actividades");
            if (err instanceof Error && err.message === "No auth token found") {
                return;
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("date", formData.date);

            formData.images.forEach((file) => {
                formDataToSend.append("images", file);
            });

            const url = currentActivity
                ? `https://cordiproddhh-back.onrender.com/api/activities/${currentActivity._id}`
                : "https://cordiproddhh-back.onrender.com/api/activities";

            const method = currentActivity ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`
                },
                body: formDataToSend
            });

            const data = await res.json();

            if (data.success) {
                setShowForm(false);
                setCurrentActivity(null);
                setFormData({
                    title: "",
                    description: "",
                    date: "",
                    images: []
                });
                fetchActivities();
            }
        } catch (err) {
            setError("Error al guardar la actividad");
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setFormData((prev) => ({
                ...prev,
                images: filesArray
            }));
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Está seguro de eliminar esta actividad?")) {
            try {
                const res = await authenticatedFetch(
                    `https://cordiproddhh-back.onrender.com/api/activities/${id}`,
                    {
                        method: "DELETE"
                    }
                );

                if (res.ok) {
                    fetchActivities();
                }
            } catch (err) {
                setError("Error al eliminar la actividad");
            }
        }
    };

    const handleEdit = (activity) => {
        setCurrentActivity(activity);
        setFormData({
            title: activity.title,
            description: activity.description,
            date: new Date(activity.date).toISOString().split("T")[0],
            images: []
        });
        setShowForm(true);
    };

    const handleLogout = async () => {
        try {
            const res = await fetch("https://cordiproddhh-back.onrender.com/api/auth/logout", {
                method: "GET"
            });
            if (res.ok) {
                navigate("/login");
            }
        } catch (err) {
            setError("Error al cerrar sesión");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const fetchAdmins = async () => {
        try {
            const res = await authenticatedFetch("https://cordiproddhh-back.onrender.com/api/auth/admins");
            const data = await res.json();
            if (data.success) {
                setAdmins(data.data);
            }
        } catch (err) {
            setError("Error al cargar administradores");
        }
    };

    const handleDeleteAdmin = async (id) => {
        if (window.confirm("¿Está seguro de eliminar este administrador?")) {
            try {
                const res = await authenticatedFetch(
                    `https://cordiproddhh-back.onrender.com/api/auth/admins/${id}`,
                    {
                        method: "DELETE"
                    }
                );

                if (res.ok) {
                    fetchAdmins();
                }
            } catch (err) {
                setError("Error al eliminar el administrador");
            }
        }
    };

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await authenticatedFetch(
                "https://cordiproddhh-back.onrender.com/api/auth/register-admin",
                {
                    method: "POST",
                    body: JSON.stringify(adminFormData)
                }
            );

            const data = await res.json();

            if (data.success) {
                setShowAdminForm(false);
                setAdminFormData({
                    name: "",
                    email: "",
                    password: ""
                });
                fetchAdmins();
            } else {
                setError(data.message || "Error al registrar administrador");
            }
        } catch (err) {
            setError("Error al registrar administrador");
        }
    };

    const handleAdminInputChange = (e) => {
        const { name, value } = e.target;
        setAdminFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    useEffect(() => {
        const token = getAuthToken();
        if (!token) {
            navigate("/login");
            return;
        }
        fetchActivities();
        fetchAdmins();
    }, []);

    return (
        <div className="min-h-screen bg-orange-50">
            {/* Header */}
            <header className="bg-orange-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                    <img
                        src="https://res.cloudinary.com/dmz6ip90o/image/upload/v1730313765/WhatsApp_Image_2024-10-30_at_10.33.32_AM_1_obbde7.png"
                        alt="CORDIPRODDHH Logo"
                        className="h-20"
                    />
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 bg-orange-600 px-3 py-2 rounded-full hover:bg-orange-700 text-sm"
                    >
                        <LogOut size={16} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6">
                {error && (
                    <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {/* Administradores Section */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-raleway font-bold text-orange-500">
                        Administradores
                    </h2>
                    <button
                        onClick={() => setShowAdminForm(true)}
                        className="flex items-center space-x-2 bg-orange-500 text-white px-3 py-2 rounded-full hover:bg-orange-600 text-sm"
                    >
                        <Users size={16} />
                        <span className="hidden sm:inline">Nuevo Administrador</span>
                        <span className="sm:hidden">Nuevo</span>
                    </button>
                </div>

                {showAdminForm && (
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6">
                        <h3 className="text-xl font-raleway font-bold text-orange-500 mb-4">
                            Nuevo Administrador
                        </h3>
                        <form onSubmit={handleAdminSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={adminFormData.name}
                                    onChange={handleAdminInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={adminFormData.email}
                                    onChange={handleAdminInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={adminFormData.password}
                                    onChange={handleAdminInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                    minLength="6"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowAdminForm(false)}
                                    className="px-3 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 text-sm"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm"
                                >
                                    Crear Administrador
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Admin List */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {admins.map((admin) => (
                        <div key={admin._id} className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-raleway font-bold text-orange-500">
                                    {admin.name}
                                </h3>
                                <button
                                    onClick={() => handleDeleteAdmin(admin._id)}
                                    className="text-gray-500 hover:text-red-500"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-2">{admin.email}</p>
                            <p className="text-sm text-gray-500">
                                Registrado: {new Date(admin.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-6 mt-6">
                    <h2 className="text-2xl font-raleway font-bold text-orange-500">
                        Actividades
                    </h2>
                    <button
                        onClick={() => {
                            setCurrentActivity(null);
                            setFormData({
                                title: "",
                                description: "",
                                date: "",
                                images: []
                            });
                            setShowForm(true);
                        }}
                        className="flex items-center space-x-2 bg-orange-500 text-white px-3 py-2 rounded-full hover:bg-orange-600 text-sm"
                    >
                        <Plus size={16} />
                        <span className="hidden sm:inline">Nueva Actividad</span>
                        <span className="sm:hidden">Nueva</span>
                    </button>
                </div>

                {showForm && (
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6">
                        <h3 className="text-base sm:text-lg font-raleway font-bold text-orange-500 mb-4">
                            {currentActivity ? "Editar Actividad" : "Nueva Actividad"}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Título
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Descripción
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Fecha
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Imágenes/Videos
                                </label>
                                <input
                                    type="file"
                                    name="images"
                                    multiple
                                    accept="image/*,video/*"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                                {formData.images.length > 0 && (
                                    <div className="mt-2 flex space-x-2">
                                        {formData.images.map((file, index) => (
                                            <div key={index} className="text-sm text-gray-600">
                                                {file.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {currentActivity && currentActivity.images.length > 0 && (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Imágenes actuales
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {currentActivity.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.url}
                                                alt={image.alt}
                                                className="h-16 sm:h-20 w-16 sm:w-20 object-cover rounded"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-3 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 text-sm"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm"
                                >
                                    {currentActivity ? "Actualizar" : "Crear"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                    </div>
                ) : (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {activities.map((activity) => (
                            <div key={activity._id} className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-raleway font-bold text-orange-500">
                                        {activity.title}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(activity)}
                                            className="text-gray-500 hover:text-orange-500"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(activity._id)}
                                            className="text-gray-500 hover:text-red-500"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{activity.description}</p>
                                <div className="flex items-center text-gray-500">
                                    <Calendar size={18} className="mr-2" />
                                    <span>{new Date(activity.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default DashboardPage;