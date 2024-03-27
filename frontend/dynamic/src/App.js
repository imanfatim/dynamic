import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import Navbar from './component/NB';
import About from './pages/AB';
import ArticlesListPage from './pages/ArticalesListPage';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
