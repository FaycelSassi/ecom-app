import Products from "../Products/Products";
import products from "../db/data";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../components/Card";



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