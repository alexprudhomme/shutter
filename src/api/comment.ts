const API_URL = "http://127.0.0.1:5000";

export const postComment = async (publicationId: String, message: String, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/publications/${publicationId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "message": message }),
    });
    return response;
};

export const rateComment = async (commentId: String, rating: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/comments/${commentId}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "rating": rating }),
    });
    return response;
};

export const updateRatingComment = async (commentId: String, rating: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/comments/${commentId}/like`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "rating": rating }),
    });
    return response;
};

export const deleteRatingComment = async (commentId: String, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/comments/${commentId}/like`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
    });
    return response;
};