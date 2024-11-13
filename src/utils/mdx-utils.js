import { api } from '../services/api';

export const getPosts = async () => {
    const { data } = await api.get('/posts');
    if(data){return data;}
    return []
};

export const getPostById = async (id) => {
    const { data } = await api.get(`posts?id=eq.${id}&select=*`);
    if(data){return data;}
    return {}
};
