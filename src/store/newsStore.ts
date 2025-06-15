import {defineStore} from "pinia";
import {ref} from "vue";

export interface NewsType {
    id: number;
    name: string;
    image: string;
    alt: string;
    datePublish: string;
    author: string;
    description: string;
    main: boolean;
    popular: boolean;
    type: string;
}

export const useNewsStore = defineStore("news", () => {
    const newsMain = ref<NewsType>();

    const randomNews = ref<NewsType[]>([]);

    const popularNews = ref<NewsType[]>([]);

    const news = ref<NewsType>();

    const newsByCategory = ref<NewsType[]>([]);

    async function getMainNews() {
        const data = await fetch("/News/news.json");
        const allNews = await data.json() as NewsType[];
        newsMain.value = allNews.find(news => news.main) ?? undefined;
    }

    async function getRandomNews() {
        const data = await fetch("/News/news.json");
        const allNews = await data.json() as NewsType[];
        randomNews.value = allNews.sort(() => Math.random() - 0.5).slice(0, 30);
    }

    async function getPopularNews() {
        const data = await fetch("/News/news.json");
        const allNews = await data.json() as NewsType[];
        popularNews.value = allNews.filter(x => x.popular).slice(0, 10);
    }

    async function getById(newsId: number) {
        const data = await fetch("/News/news.json");
        const allNews = await data.json() as NewsType[];
        news.value = allNews.find(news => news.id == newsId) ?? undefined;
    }

    async function getNewsByCategory(category : string) {
        const data = await fetch("/News/news.json");
        const allNews = await data.json() as NewsType[];
        newsByCategory.value = allNews.filter(x => x.type == category);
    }

    function truncateText(text : string, wordLimit : number) {
        if (!text) return '';
        const cleanText = text.replace(/\s+/g, ' ').trim();
        const words = cleanText.split(' ');
        return words.length <= wordLimit
            ? cleanText
            : words.slice(0, wordLimit).join(' ') + '...';
    }

    return {
        newsMain,
        getMainNews,
        randomNews,
        getRandomNews,
        popularNews,
        getPopularNews,
        news,
        getById,
        newsByCategory,
        getNewsByCategory,
        truncateText
    }

});