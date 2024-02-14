import { Link } from "react-router-dom";
import "./product.css";
import Charts from "../../components/charts/Charts";
import { productData } from "../../dummyData";
export default function Product() {
  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="prducttitle">Products</h1>
          <Link to="/newProducts">
            <button className="productBtn">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productleft">
            <Charts
              data={productData}
              dataKey={"Sales"}
              title={"Sales Performance"}
            />
          </div>
          <div className="productright">
            <div className="productrighttop">
              <img
                src="https://media.wired.com/photos/650c80a777e4baffa125b82b/1:1/w_1584,h_1584,c_limit/Apple-Watch-SE-Gen-2-Featured-Gear.jpg"
                alt=""
                className="productImg"
              />
              <span className="productName">Apple Watch</span>
            </div>
            <div className="productrightbottom">
              <span className="productName">Product Info</span>
              <div className="productInfoItem">
                <span className="productInfoKey">Id:</span>
                <span className="productInfoValue">142</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">1891</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">In Stock:</span>
                <span className="productInfoValue">Avilable</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productbottom">
          <form action="createproduct" className="productfrom">
            <div className="productFromleft">
              <label htmlFor="">Product Name</label>
              <input type="text" placeholder="Apple watch" />
              <label htmlFor="">In Stock</label>
              <select name="InStock" id="InStock">
                <option value="yes">Yse</option>
                <option value="No">No</option>
              </select>
              <label htmlFor="">Active</label>
              <select name="active" id="active">
                <option value="yes">Yse</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="productFromRight">
              <div className="productUplode">
                <img
                  src="https://media.wired.com/photos/650c80a777e4baffa125b82b/1:1/w_1584,h_1584,c_limit/Apple-Watch-SE-Gen-2-Featured-Gear.jpg"
                  alt=""
                  className="productImg"
                />
                <label htmlFor="file">
                  <i class="fa-solid fa-upload"></i>
                </label>
                <input style={{ display: "none" }} type="file" id="file" />
              </div>
              <button className="productBtn">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
