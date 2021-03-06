const API_KEY = '';

const BASE_URL = 'https://api.themoviedb.org/3';

const LANGUAGE = 'language=pt-BR';

const callApiTmdb = async (endPoint) =>
{
    const req = await fetch(`${BASE_URL}${endPoint}`);

    return await req.json();
}

export default {
    getHomeList: async () =>
    {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await callApiTmdb(`/discover/tv?with_network=213&${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados pra você',
                items: await callApiTmdb(`/trending/all/week?${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await callApiTmdb(`/movie/top_rated?${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await callApiTmdb(`/discover/movie?with_genres=28&${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await callApiTmdb(`/discover/movie?with_genres=35&${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await callApiTmdb(`/discover/movie?with_genres=27&${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await callApiTmdb(`/discover/movie?with_genres=10749&${LANGUAGE}&${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await callApiTmdb(`/discover/movie?with_genres=99&${LANGUAGE}&${API_KEY}`),
            },
        ]
    },
    getMovieInfo: async (movieId, type) =>
    {
        var info = [];

        if (movieId) {
            info = await callApiTmdb(`/${type}/${movieId}?${LANGUAGE}&${API_KEY}`);
        }

        return info;
    }
}