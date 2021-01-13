import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import ImageContainer from "../utils/ImageContainer";
import Shimmer from "../utils/Shimmer";
import DetailTable from "../utils/DetailTable";
import moment from "moment";

function ProductDetailPage() {
  const params = useParams();
  const history = useHistory();
  const [{ url, secret_key }] = useStateValue();
  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = Axios.get(`${url}/product/getproduct/${params.id}`, {
        headers: {
          Authorization: secret_key,
        },
      });
      const productdata = await response;
      setProduct(productdata.data);
      setLoading(false);
    };
    if (params.id) {
      fetchData();
    }
  }, []);

  const deleteProduct = async () => {
    const response = await Axios.delete(
      `${url}/product/deleteproduct/${params.id}`,
      {
        headers: {
          Authorization: secret_key,
        },
      }
    );
    if (response.status === 200) {
      alert("product deleted succesfully");
      history.goBack();
    } else {
      alert("something went wrong cant delete this product");
    }
  };

  console.log(product);

  if (Loading) return <Shimmer />;

  return (
    <div className="container mt-3 p-2 mb-5 bg-light">
      <div className="row p-3">
        <div className="col-sm">
          <small>title</small> <h2>{product.title}</h2>
        </div>
        <div className="col-sm">
          <small>CreatedAt</small>{" "}
          <p> {moment(product.createdAt).format("YYYY-MM-DD,hh-mm-ss")} </p>
          <small>description</small> <p>{product.description}</p>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-sm">
          <small>seller</small>
          <p>
            <strong> {product.seller} </strong>
          </p>
        </div>
        <div className="col-sm">
          <small>sell price</small> <p> {product.sell_price} ₹INR </p>
        </div>
        <div className="col-sm">
          <small>Offer Price id</small> <p> {product.offer_price} ₹INR</p>
        </div>
        <div className="col-sm">
          <small>Quantity On hand </small> <p> {product.quantity} pieces</p>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-sm-2">
          <p>thumbnail</p>
          <small className="text text-muted">
            should be smaller in size (100*100 is good) and smaller in image
            size shoud be 10-15kb
          </small>
        </div>
        <div className="col-sm-10">
          <ImageContainer imageURL={product.thumbnailURL} />
        </div>
      </div>
      <div className="row p-3">
        <div className="col-sm-2">
          <p>images</p>
          <small className="text text-muted">
            should be in affordable size not more than 100kb and in size
            (420*420)
          </small>
        </div>
        <div className="col-sm-10 align-middle">
          {product.imageURL.map((url) => (
            <ImageContainer imageURL={url} />
          ))}
        </div>
      </div>
      <div className="row p-3">
        <div className="col-sm">
          <small>Rating</small> <p> {product.rating}★</p>
        </div>
        <div className="col-sm">
          <small>Color</small> <p> {product.color} </p>
        </div>
        <div className="col-sm">
          <small>Group</small> <p> {product.group} </p>
        </div>
        <div className="col-sm">
          <small>Product id</small> <p> {product.pid} </p>
        </div>
      </div>
      <div className="row p-3 border border-light">
        <div className="col-sm">
          <small>tags</small> <br />
          {product.tags.map((tag) => (
            <button className="btn btn-outline-success m-1">{tag}</button>
          ))}
        </div>
        <div className="col-sm">
          <small>Product details</small> <br />
          <DetailTable detail={product.details} />
        </div>
      </div>
      <div className="row p-3">
        <div className="col-sm">
          <button className="btn btn-danger text-light" onClick={deleteProduct}>
            Remove this product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
