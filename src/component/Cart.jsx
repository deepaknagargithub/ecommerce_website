import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Product from "./Product";
import axios from "axios";
import { addProducts } from "../actions";
import { priceFilter } from "../actions";

function Cart(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetProduct = async () => {
      try {
        const res = await axios.get(
          "https://my-json-server.typicode.com/deepaknagargithub/json_server/products"
        );
        console.log(res);
        dispatch(addProducts(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetProduct();
  }, []);
  const handleSelect = (e) => {
    console.log(e.target.value);
    dispatch(priceFilter(e.target.value));
  };
  return (
    <div className="cart">
      <Navbar />
      <div className="filter">
        <label for="price" id="price">
          Sort By Price:
        </label>
        <select name="pricefilter" onChange={handleSelect}>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
        </select>
      </div>

      {products.map((item) => (
        <Product key={item.id} Item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}

// function mapState(state) {
//   return {
//     products: state.products,
//     name: "deepak",
//     rollNumber: 27,
//   };
// }

// const connectedCartComponents = connect(mapState)(Cart);

export default Cart;
