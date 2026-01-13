import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/index.jsx';
import HeaderNavigation from './components/Header/HeaderNavigation.jsx';
import GlobalStyle from '../GlobalStyle.js';
import NewsCardList from './components/main/NewsCardList.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderNavigation/>

      <main>
        <Routes>
          <Route path="/" element={<NewsCardList />} />
          <Route path="/:category" element={<NewsCardList />} />
        </Routes>
      </main>

      <Footer/>
    </>
  );
}

export default App;
