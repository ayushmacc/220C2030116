import axios from 'axios';

const API_BASE = "http://20.244.56.144/test";

export const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE}/users`);
    return response.data.users;
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE}/posts`);
    return response.data.posts;
};

export const fetchComments = async () => {
    const response = await axios.get(`${API_BASE}/comments`);
    return response.data.comments;
};
