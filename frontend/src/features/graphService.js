const API_URL = "https://project-glovo-api.onrender.com";

export const getEdges = async () => {
    const data = await fetch(`${API_URL}/edges/?n=100`).then((r) => r.json());
    return data;
};