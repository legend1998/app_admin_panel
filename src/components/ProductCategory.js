import React, { useState } from "react";
import Axios from "axios";
import { useStateValue } from "../StateProvider";

function ProductCategory({ cats }) {
  const [category, setcategory] = useState("");
  const [{ url, secret_key }] = useStateValue();

  const AddCategory = () => {
    if (category.length < 2) return;
    Axios.post(
      `${url}/category/addcategory`,
      {
        category: category,
      },
      {
        headers: {
          Authorization: secret_key,
        },
      }
    )
      .then((response) => {
        setcategory("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" m-3  ">
      <p>Product Categories </p>
      {cats ? (
        <ul className="list-group overflow-auto categories">
          {cats.map((cat, index) => (
            <li className="list-group-item" key={index}>
              {cat.category}
            </li>
          ))}
        </ul>
      ) : (
        "no data"
      )}
      <div className="category_input_div ">
        <input
          type="text"
          className="form-control"
          placeholder="add category"
          onChange={(e) => setcategory(e.target.value)}
        />
        <button className="btn btn-primary " onClick={AddCategory}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCategory;
