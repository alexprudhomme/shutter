const API_URL = "http://127.0.0.1:5000";


export const getGallery = async (gallery_id: string, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
    });
    return response;
}
export const rateGallery = async (gallery_id: string, rating: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "rating": rating }),
    });
    return response;
}
export const updateRateGallery = async (gallery_id: string, rating: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}/like`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "rating": rating }),
    });
    return response;
}
export const deleteRatingGallery = async (gallery_id: string, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}/like`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
    });
    return response;
}
export const deleteGalleryApi = async (gallery_id: string, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
    });
    return response;
}
export const deletePublicationFromGalleryApi = async (gallery_id: string, publication_id: string, authKey: string) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}/publications`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "publication_id": publication_id }),
    });
    return response;
}
export const addPublicationToGalleryApi = async (gallery_id: string, publication_id: string, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}/publications`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "publication_id": publication_id }),
    });
    return response;
}
export const createGalleryApi = async (title: string, description:string, private_bool: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({"description": description, "title": title , "private": private_bool}),
    });
    return response;
}
export const updateGalleryApi = async (gallery_id: string, title: string, despcription:string, private_bool: boolean, authKey: String) => {
    const key = "Bearer " + authKey;
    const response = await fetch(`${API_URL}/galleries/${gallery_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": key,
        },
        body: JSON.stringify({ "title": title , "description": despcription, "private": private_bool}),
    });
    return response;
}