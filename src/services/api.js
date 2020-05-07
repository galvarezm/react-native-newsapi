// llave publica
const API_KEY = '5ce8817b204f4d14a6e0eb17548edad6';

const getNews = async () => {
    const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
    const resultData = await fetch(url);
    const resultJson = await resultData.json();
    return await resultJson.sources;
}

export default {
    getNews
};
