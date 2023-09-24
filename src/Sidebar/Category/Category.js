import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test category"/>
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test category"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test category"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test category"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test category"
        />
      </div>
    </div>
  );
}

export default Category;
