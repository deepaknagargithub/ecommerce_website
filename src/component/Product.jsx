import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import axios from "axios";
import { useRef, useState } from "react";
import { deleteProduct } from "../actions";

function Product(props) {
  const desc = useRef();
  const [edit, setEdit] = useState(false);
  const val = props.Item;
  const handleClick = () => {
    props.dispatch(deleteProduct(val.id));
  };
  const handleClickEdit = () => {
    setEdit(true);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/products/${val.id}`, {
      desc: desc.current.value,
    });
    window.location.reload();
  };
  return (
    <div className="cart">
      <div className="item">
        <div>
          <img src={val.img}  className="img" />
        </div>

        <div className="title">
          <h1>{val.title}</h1>
          <span>Rs: {val.price}</span>
        </div>
        <div className="desc">
          {edit ? (
            <form onSubmit={handleEdit}>
              <input ref={desc} className="editform" />{" "}
              <button onSubmit={handleEdit}>Save</button>
            </form>
          ) : (
            <h4>{val.desc}</h4>
          )}
        </div>
        <div className="icons">
          <ModeEditOutlineTwoToneIcon onClick={handleClickEdit} />
          <DeleteOutlineTwoToneIcon onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
export default Product;
