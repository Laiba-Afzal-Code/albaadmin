import "./productsList.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productsRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [data, setData] = useState(productsRows);

  const hendleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "products",
      headerName: "Products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img src={params.row.avater} alt="" className="productListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      description: "products value of prices",
      sortable: false,
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      description: "edit",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <i
              className="fa-regular fa-trash-can productListDelete"
              onClick={() => hendleDelete(params.row.id)}
            ></i>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="productsList">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
}
