import "./userList.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {userRows} from "../../dummyData"
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const hendleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200, renderCell: (params)=>{
      return(
      <div className="userListUser">
          <img src={params.row.avater} alt="" className="userListImg"/>
          {params.row.username}
      </div>
      )
    }},
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 100,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      description: "edit",
      width: 150,
      renderCell:(params)=>{
          return(
              <>
              <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
              </Link>
              <i className="fa-regular fa-trash-can userListDelete" onClick={()=>hendleDelete(params.row.id)}></i>
              </>
          )
      }
    },
  ];
  return (
    <>
      <div className="userList">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={userRows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
