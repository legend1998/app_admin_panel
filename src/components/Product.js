import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductTable from "../utils/ProductTable";
import Pagination from "../utils/Pagination";
import DisplayStas from "../utils/DisplayStats";
import { useStateValue } from "../StateProvider";

function Product() {
  const [{ url, secret_key }] = useStateValue();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = Axios.get(`${url}/product/getall`, {
        headers: {
          Authorization: secret_key,
        },
      });
      const productsdata = await response;
      setProducts(productsdata.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(products);

  const changePage = (page) => setcurrentPage(page);

  return (
    <div>
      <DisplayStas totalproduct={products.length} />
      <div className="row container-fluid">
        <div className="col-md-8 d-flex flex-column align-items-center">
          {/*  there will product table */}
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
