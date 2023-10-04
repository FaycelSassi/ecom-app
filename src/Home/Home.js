import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";




    function Home({ handleChange, handleClick, result }) {
    return (
        <div className="body">
          <Sidebar handleChange={handleChange} />
          <div className="prods-container">
            <Recommended handleClick={handleClick} />
            <Products result={result} />
          </div>
        </div>
    )
    }
export default Home;