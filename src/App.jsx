import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import GlobalStyle from "./style/GlobalStyle.js";
import {fetchNews} from "./utils/fetchNews.js";
import NewsCard from "./components/NewsCard.jsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./style/theme.js";
import {useLocation, useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [ articles, setArticles ] = useState([]);
    const [ category, setCategory ] = useState('All');
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
        const pathCategory = location.pathname.slice(1) || "All";
        setCategory(pathCategory);
    }, [location]);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await fetchNews(API_KEY, category);
            const articles = data.articles.filter(article => (article.title !== "[Removed]"));
            setArticles(articles);
        };
        getArticles();
    }, [category, API_KEY]);

    const handleSelectedCategory = (category) => {
        setCategory(category);
        navigate(`/${category}`);
    }

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                    <Header
                        currentCategory={category}
                        onSelectedCategory={handleSelectedCategory}
                        isDarkMode={isDarkMode}
                        onToggleDarkMode={handleToggleDarkMode}
                    />
                    <main>
                        {articles && articles.length > 0 ? (
                            articles.map((article, index) => (
                                <NewsCard key={index} article={article} />
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </main>
            </ThemeProvider>
        </>
    )
}

export default App
