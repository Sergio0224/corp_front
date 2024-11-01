import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ActivityDetailPage = () => {
    const [activity, setActivity] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    useEffect(() => {
        const fetchActivityDetails = async () => {
            if (!id) return;

            try {
                const response = await fetch(`https://cordiproddhh-back.onrender.com/api/activities/${id}`);
                const data = await response.json();

                if (data.success) {
                    const processedActivity = {
                        ...data.data,
                        images: data.data.images.map(img => ({
                            url: img.url,
                            alt: img.alt,
                            type: img.url.includes(".mp4") || img.url.includes(".mpeg") ? "video" : "image"
                        }))
                    };

                    setActivity(processedActivity);

                    if (processedActivity.images.length > 0) {
                        setSelectedMedia(processedActivity.images[0]);
                    }
                } else {
                    throw new Error("Failed to fetch activity details");
                }
            } catch (err) {
                setError("Failed to load activity details");
            } finally {
                setLoading(false);
            }
        };

        fetchActivityDetails();
    }, [id]);

    const handleMediaSelect = (media) => {
        setSelectedMedia(media);
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500 p-4">{error}</div>
    );

    if (!activity) return null;

    return (
        <div className="relative min-h-screen bg-orange-50">
            <div className="pb-32">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <Link
                        to="/actividades"
                        className="mb-6 flex items-center text-orange-500 hover:text-orange-600"
                    >
                        <ArrowLeft className="mr-2" /> Volver
                    </Link>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Media Viewer */}
                        <div className="w-full h-[500px] bg-black flex items-center justify-center">
                            {selectedMedia?.type === "image" && (
                                <img
                                    src={selectedMedia.url}
                                    alt={selectedMedia.alt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            )}
                            {selectedMedia?.type === "video" && (
                                <video
                                    src={selectedMedia.url}
                                    controls
                                    className="max-w-full max-h-full"
                                />
                            )}
                        </div>

                        {/* Media Thumbnails */}
                        <div className="flex overflow-x-auto p-4 bg-gray-100 space-x-4">
                            {activity.images.map((media, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleMediaSelect(media)}
                                    className={`cursor-pointer w-20 h-20 flex-shrink-0 
                    ${selectedMedia?.url === media.url ? "border-2 border-orange-500" : "border border-gray-300"}
                    rounded-lg overflow-hidden`}
                                >
                                    {media.type === "image" ? (
                                        <img
                                            src={media.url}
                                            alt={media.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={media.url}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Activity Details */}
                        <div className="p-8">
                            <Fade direction='up' triggerOnce>
                                <div className="text-orange-500 mb-4 flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{formatDate(activity.date)}</span>
                                </div>
                                <h1 className="text-3xl font-raleway font-bold text-gray-900 mb-4">
                                    {activity.title}
                                </h1>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {activity.description}
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <svg
                    viewBox="0 0 1440 100"
                    className="fill-gray-900 w-full block"
                    preserveAspectRatio="none"
                >
                    <path d="M0,100 C280,0 720,0 1440,100" />
                </svg>
            </div>
        </div>
    );
};

export default ActivityDetailPage;