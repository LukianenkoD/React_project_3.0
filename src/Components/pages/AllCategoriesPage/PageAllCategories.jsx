import { Link } from 'react-router-dom';
import './page_all_categories.scss';

function PageAllCategories({categories}) {
 
  return (
    <>
     <h1 className='all_categories container'>Categories</h1>
     <div className="categories container">
        {categories.map((product, index) => {
            return (
              <Link key={index} to={`/PageAllCategories/${product.id}`}>
                 <div key={product.id}>
                <img src={`http://localhost:3333${product.image}`} alt="phot" />
                <p>{product.title}</p>
              </div>
              </Link>
            );
        })}
      </div>
    </>
  )
}
export default PageAllCategories