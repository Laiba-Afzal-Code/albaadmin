import "./newProducts.css";

export default function NewProducts() {
  return (
    <>
      <div className="newProducts">
        <h1 className="newProductsTitle">New Products</h1>
        <form className="newProductsForm">
          <div className="newProductitem">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Apple Watches"
              className="newProductname"
            />
          </div>
          <div className="newProductitem">
            <label>Quality</label>
            <input
              type="text"
              placeholder="High, Medime, Low"
              className="newProductname"
            />
          </div>
          <div className="newProductitem">
            <label>In Stock</label>
            <input
              type="text"
              placeholder="Avilable or Not"
              className="newProductname"
            />
          </div>
          <div className="newProductitem">
            <label>Quantity</label>
            <input type="text" className="newProductname" placeholder="2340" />
          </div>
          <div className="newProductitem">
            <label>Product Code</label>
            <input
              type="text"
              className="newProductname"
              placeholder="0-309-030"
            />
          </div>
          <div className="newProductitem">
            <label>Address</label>
            <input
              type="text"
              className="newProductname"
              placeholder="Punjab, Pakistan"
            />
          </div>
          <div className="newProductitem">
            <label>Size</label>
            <div className="newProductsSize">
              <input type="radio" name="Size" value="Large" id="Large" />
              <label htmlFor="Large">Large</label>
              <input type="radio" name="Size" value="Small" id="Small" />
              <label htmlFor="female">Small</label>
              <input type="radio" name="Size" value="Medium" id="Medium" />
              <label htmlFor="Medium">Medium</label>
            </div>
          </div>
          <div className="newProductitem">
            <label>Active</label>
            <select name="status" id="status">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="createnewProducts" type="submit">
            Create Product
          </button>
        </form>
      </div>
    </>
  );
}
