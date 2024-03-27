import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <>
        <h1 className='text-center m-10 font-bold text-2xl'>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="text-center font-sans" to={`/articles/${article.name}`}>
                <h3 className=' m-8 '>{article.title}</h3>
                  <div className='px-72'>
                <p className='bg-blue-300 rounded-full m-1 p-3 ' >{article.content[0].substring(0, 100)}...</p>
                </div>
                <hr />
            </Link>
        ))}
        </>
    );
}

export default ArticlesListPage;