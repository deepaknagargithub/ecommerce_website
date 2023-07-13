import React from "react";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="heading1 heading">eCommerce</span>
      <Link className="link" to="/">
        <span className="heading2 heading">Products</span>
      </Link>
      <span className="heading3 heading">
        <Link to="/addproduct" className="link">
          Add Products <AddCircleTwoToneIcon />
        </Link>
      </span>
    </div>
  );
}
