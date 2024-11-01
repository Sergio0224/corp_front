import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Video } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const getMediaPreview = (mediaItem) => {
    const isVideo = mediaItem.url.toLowerCase().includes(".mp4") ||
        mediaItem.url.includes("/video/upload/");

    if (isVideo) {
        const thumbnailUrl = mediaItem.url
            .replace("/upload/", "/upload/so_0/")
            .replace(".mp4", ".jpg");
        return {
            url: thumbnailUrl,
            isVideo: true
        };
    }

    return {
        url: mediaItem.url,
        isVideo: false
    };
};

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch("https://cordiproddhh-back.onrender.com/api/activities/");
                const data = await response.json();
                if (data.success) {
                    setActivities(data.data);
                } else {
                    throw new Error("Failed to fetch activities");
                }
            } catch (error) {
                console.error("Error fetching activities:", error);
                setError("Failed to load activities. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    const handleActivityClick = (activityId) => {
        navigate(`/actividades/${activityId}`);
    };

    const renderMediaPreview = (activity) => {
        if (!activity.images || activity.images.length === 0) {
            return (
                <div className="w-full h-full bg-orange-100 flex items-center justify-center">
                    <Calendar className="w-20 h-20 text-orange-500" />
                </div>
            );
        }

        const preview = getMediaPreview(activity.images[0]);

        return (
            <div className="relative w-full h-full">
                <img
                    src={preview.url}
                    alt={activity.title}
                    className="object-cover w-full h-full"
                    loading={activities.indexOf(activity) === 0 ? "eager" : "lazy"}
                />
                {preview.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Video className="w-12 h-12 text-white" />
                    </div>
                )}
            </div>
        );
    };

    const renderFeaturedActivity = () => {
        if (!activities.length) return null;

        const featuredActivity = activities[0];

        return (
            <section className="bg-orange-50 py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Fade direction='up' triggerOnce>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-[400px]">
                                    {renderMediaPreview(featuredActivity)}
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="text-orange-500 mb-4 flex items-center">
                                        <Clock className="w-5 h-5 mr-2" />
                                        <span>{formatDate(featuredActivity.date)}</span>
                                    </div>
                                    <h2 className="text-3xl font-raleway font-bold text-gray-900 mb-4">
                                        {featuredActivity.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        {featuredActivity.description}
                                    </p>
                                    <button
                                        onClick={() => handleActivityClick(featuredActivity._id)}
                                        className="mt-auto flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                                    >
                                        Leer más <ArrowRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        );
    };

    return (
        <div className="min-h-screen font-sans">
            <section className="relative bg-orange-500 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center">
                        <Fade direction='up' triggerOnce>
                            <h1 className="text-5xl font-raleway font-bold text-white leading-tight mb-6">
                                Impacto y Acciones
                            </h1>
                            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                                Documentamos nuestras actividades y logros en la defensa de los derechos humanos.
                                Cada acción cuenta una historia de cambio y esperanza.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-orange-50 w-full">
                        <path d="M0,0 C280,120 720,120 1440,0 V100 H0 V0 Z" />
                    </svg>
                </div>
            </section>

            {!loading && !error && activities.length > 0 && renderFeaturedActivity()}

            <section className="py-20 bg-orange-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {loading ? (
                        <div className="flex justify-center items-center min-h-[200px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg">
                            {error}
                        </div>
                    ) : activities.length === 0 ? (
                        <div className="text-center text-gray-500 p-4">
                            No hay actividades registradas en este momento.
                        </div>
                    ) : (
                        <div className="grid gap-8">
                            {activities.slice(1).map((activity) => (
                                <Fade direction='up' triggerOnce key={activity._id}>
                                    <article className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                                        <div className="md:flex">
                                            <div className="md:w-1/3 h-[300px] relative">
                                                {renderMediaPreview(activity)}
                                            </div>
                                            <div className="p-8 md:w-2/3">
                                                <div className="text-orange-500 mb-4 flex items-center">
                                                    <Clock className="w-5 h-5 mr-2" />
                                                    <span>{formatDate(activity.date)}</span>
                                                </div>
                                                <h3 className="text-2xl font-raleway font-bold text-gray-900 mb-4">
                                                    {activity.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6">
                                                    {activity.description}
                                                </p>
                                                <button
                                                    onClick={() => handleActivityClick(activity._id)}
                                                    className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                                                >
                                                    Leer más <ArrowRight className="w-5 h-5 ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                </Fade>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-orange-500 w-full">
                        <path d="M0,100 C280,0 720,0 1440,100" />
                    </svg>
                </div>
            </section>

            <section className="bg-orange-500 py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Fade direction='up' triggerOnce>
                        <h2 className="text-3xl font-raleway font-bold text-white mb-6">
                            Cada Acción Cuenta una Historia
                        </h2>
                        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                            A través de nuestro trabajo y dedicación, construimos un futuro más justo y equitativo para todos.
                            Tu apoyo hace la diferencia.
                        </p>
                        <Link to="/contacto" className="bg-white text-orange-500 px-8 py-3 rounded-full font-raleway font-medium hover:bg-gray-100 transition-colors">
                            Únete a Nuestra Causa
                        </Link>
                    </Fade>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="fill-gray-900 w-full">
                        <path d="M0,100 C280,0 720,0 1440,100" />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default ActivitiesPage;