import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const title = useRef();
  const price = useRef();
  const desc = useRef();
  let navigate = useNavigate();

  const handleFormData = async (e) => {
    e.preventDefault();
    const obj = {
      title: title.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };
    console.log(obj);
    await axios.post(
      "https://my-json-server.typicode.com/deepaknagargithub/json_server/products",
      obj
    );

    alert("you have added new product");
    const goHome = () => {
      navigate("/");
    };
    goHome();
  };
  return (
    <div id="form">
      <div>
        <form onSubmit={handleFormData} className="addformdata">
          <div>Name</div>
          <input required ref={title} />
          <div>Price</div>
          <input ref={price} />
          <div>Desc</div>
          <input ref={desc} />
          <br />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
