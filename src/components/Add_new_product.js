import React, { useEffect, useState } from "react";

import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

import { storage } from "../firebase";
import Axios from "axios";
import ProductCategory from "./ProductCategory";

function AddProduct() {
  const [{ url, secret_key }] = useStateValue();
  const history = useHistory();
  const [image, setimage] = useState(null);
  const [imageURLs, setimageURLs] = useState([]);

  const [thumbnail, setthumbnail] = useState(null);
  const [ThumbnailURL, setThumbnailURL] = useState("");

  const [tags, settags] = useState([]);
  const [tag, setTag] = useState("");
  const [Details, setDetails] = useState([]);
  const [field, setfield] = useState("");
  const [value, setvalue] = useState("");
  const [id, setid] = useState("");
  const [group, setgroup] = useState("none");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [desc, setdesc] = useState("");
  const [model, setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [quantity, setquantity] = useState(0);
  const [sell_price, setsell_price] = useState("");
  const [offer_price, setoffer_price] = useState("");
  const [approve, setapprove] = useState(false);
  const [categoryList, setCtList] = useState([]);
  const [seller, setseller] = useState("");

  const addtag = (e) => {
    e.preventDefault();
    if (!tags.find((i) => i === tag)) {
      settags([...tags, tag]);
    }
    setTag("");
    console.log(tags);
  };

  const handleDetails = (e) => {
    e.preventDefault();
    if (field.length > 2 && value.length > 2) {
      setDetails([...Details, { field: field, value: value }]);
    }
    setfield("");
    setvalue("");
  };

  const submitProduct = () => {
    if (!approve) return;

    const product = {
      pid: id,
      title: title,
      offer_price: offer_price,
      sell_price: sell_price,
      category: category,
      description: desc,
      tags: tags,
      color: color,
      thumbnailURL: ThumbnailURL,
      imageURL: imageURLs,
      group: group,
      quantity: quantity,
      seller: seller,
      rating: 3,
      details: Details,
    };

    console.log(product);
    Axios.post(`${url}/product/add`, product, {
      headers: {
        Authorization: secret_key,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        window.location.reload();
        alert("product added successfully");
      } else {
        alert("some field is missing try to fill that");
      }
    });
  };

  const handlethumbnailUpload = () => {
    if (!thumbnail) return;

    var storageRef = storage.ref();
    storageRef
      .child(`thumbnail/${thumbnail.name + Date.now()}`)
      .put(thumbnail)
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then(function (downloadURL) {
            setThumbnailURL(downloadURL);
            console.log("File available at", downloadURL);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const handleImageUpload = () => {
    if (!image) return;

    var storageRef = storage.ref();
    storageRef
      .child(`images/${image.name + Date.now()}`)
      .put(image)
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then(function (downloadURL) {
            setimageURLs([...imageURLs, downloadURL]);
            console.log("File available at", downloadURL);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  useEffect(() => {
    Axios.get(`${url}/category/getcategory`, {
      headers: {
        Authorization: secret_key,
      },
    })
      .then((docs) => {
        setCtList(docs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url, secret_key]);

  return (
    <div className="container-fluid">
      <h2 className="text-center m-5 border-bottom">
        fill the product details to upload
      </h2>
      <div className="row mt-2 container-fluid">
        <div className="col-sm-4">
          {categoryList ? <ProductCategory cats={categoryList} /> : "Loading"}
        </div>
        <table className=" col-md-8 ">
          <tbody>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  className="form-control"
                  type="text"
                  placeholder="id of this product"
                  onChange={(e) => setid(e.target.value)}
                  value={id}
                  required
                />
                <small className="text text-muted">id for the product</small>
              </td>
              <td className="col-sm">
                <small className="text-muted form-text">
                  *product name with some number
                </small>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="name of product"
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                  required
                />
                <small className="text text-muted">product title</small>
              </td>
              <td className="col-sm">
                <select
                  name="Select"
                  className="form-control"
                  id="category"
                  onChange={(e) => setcategory(e.target.value)}
                  value={category}
                  required
                >
                  {categoryList.map((cat, index) => (
                    <option value={cat.category} key={index}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="describe your product"
                  onChange={(e) => setdesc(e.target.value)}
                  value={desc}
                  required
                />
                <small className="text text-muted">description</small>
              </td>
              <td className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setgroup(e.target.value)}
                />
                <small className="text text-muted">
                  Group for group products only
                </small>
              </td>
            </tr>

            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="text"
                  name="model"
                  className="form-control"
                  placeholder="model"
                  onChange={(e) => setmodel(e.target.value)}
                  value={model}
                  required
                />
                <small className="text text-muted">Model</small>
              </td>
              <td className="col-sm">
                <input
                  type="text"
                  id="product_model"
                  className="form-control"
                  placeholder="seller of this product"
                  onChange={(e) => setseller(e.target.value)}
                  value={seller}
                  required
                />
                <small className="text-muted">Seller</small>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <p>tags</p>
                <div className="">
                  {tags.map((tag) => (
                    <button className="btn btn-outline-primary m-1">
                      {tag}
                    </button>
                  ))}
                </div>
                <form onSubmit={addtag}>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="tags"
                    value={tag}
                    required
                  />
                </form>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="color"
                  onChange={(e) => setcolor(e.target.value)}
                  value={color}
                  required
                />
                <small className="text text-muted">color</small>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="quantity"
                  onChange={(e) => setquantity(e.target.value)}
                  value={quantity}
                  required
                />
                <small className="text text-muted">quantity</small>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <input
                  type="number"
                  className="form-control"
                  name="sellprice"
                  placeholder="sell price"
                  onChange={(e) => setsell_price(e.target.value)}
                  value={sell_price}
                  required
                />
                <small className="text text-muted">sell_price</small>
              </td>
              <td className="col-sm">
                <input
                  type="number"
                  name="offerprice"
                  className="form-control"
                  placeholder="offer/discount price"
                  onChange={(e) => setoffer_price(e.target.value)}
                  value={offer_price}
                  required
                />
                <small className="text text-muted">
                  offer/discount price price
                </small>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                <p>details</p>
              </td>
            </tr>
            <tr className="row mt-2">
              <td colSpan="2" className="col-sm">
                <div className="details">
                  {Details.map((det) => (
                    <p>
                      <strong>{det.field} </strong> : <span> {det.value} </span>
                    </p>
                  ))}
                </div>
                <form>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setfield(e.target.value)}
                    placeholder="attribute"
                    value={field}
                  />
                  <input
                    type="text"
                    placeholder="value"
                    className="form-control"
                    onChange={(e) => setvalue(e.target.value)}
                    value={value}
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    value="add Detail"
                    onClick={handleDetails}
                  >
                    add
                  </button>
                </form>
              </td>
            </tr>
            <tr className="row mt-2">
              <td className="col-sm">
                {imageURLs.map((url) => (
                  <img src={url} height="80px" alt="not found" />
                ))}
                <input
                  type="file"
                  className="form-control"
                  placeholder="select multiple files here"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    setimage(e.target.files.item(0));
                  }}
                />
                <small className="text text-muted">
                  {" "}
                  add Image here (can select multiple images) recomended
                  size:300-400kb
                </small>
                <br />
                <button className="btn btn-primary" onClick={handleImageUpload}>
                  upload
                </button>
              </td>
              <td className="col-sm">
                <p>
                  add thumbnail (a small size of pic that will display on search
                  recommended:10-12 kb)
                </p>
                {ThumbnailURL ? (
                  <img
                    src={ThumbnailURL}
                    width="100px"
                    height="100px"
                    alt="not found"
                  />
                ) : null}
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setthumbnail(e.target.files.item(0))}
                  placeholder="select multiple files here"
                  accept=".jpg, .jpeg, .png"
                />
                <small className="text text-muted">
                  {" "}
                  add thumbnail (a small size of pic that will display on search
                  recommended:10-12 kb)
                </small>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handlethumbnailUpload}
                >
                  upload
                </button>
              </td>
            </tr>
            <tr className="row mt-2 mt-5">
              <td className="col-sm">
                <input
                  type="checkbox"
                  name="final_approval"
                  onChange={(e) => setapprove(e.target.value)}
                />
                <label htmlFor="final_approval">
                  check this to upload the product finally.
                </label>
              </td>
            </tr>
            <tr className="row mt-2 mb-5">
              <td className="col-sm">
                <button
                  name="final_approval"
                  className="btn btn-primary"
                  onClick={submitProduct}
                >
                  Upload this Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddProduct;
