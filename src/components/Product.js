import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductTable from "../utils/ProductTable";
import Pagination from "../utils/Pagination";
import DisplayStas from "../utils/DisplayStats";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(3);
  const [productPerPage] = useState(10);

  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setProducts(res.data);

      setloading(false);
    };
    fetchProduct();
  }, []);

  const changePage = (page) => setcurrentPage(page);

  return (
    <div>
      <DisplayStas totalproduct={products.length} />
      <div className="row container-fluid">
        <div className="col-md-8 d-flex flex-column align-items-center">
          <ProductTable products={currentProducts} loading={loading} />
          <Pagination
            totalProduct={products.length}
            productPerPage={productPerPage}
            changePage={changePage}
          />
        </div>
        <div className="col-md-4">
          <a className="btn btn-outline-primary m-3" href="/add_new_product">
            Add new Product
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
