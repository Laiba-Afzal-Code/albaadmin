import "./userList.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Userrows} from "../../dummyData"
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "user", headerName: "User", width: 200, renderCell:(params)=>{
    return(
    <div className="userListUser">
        <img src={params.rows.avater} alt="" className="userListImg"/>
        {params.rows.username}
    </div>
    )
  }},
  { field: "email", headerName: "Email", width: 200 },
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
    width: 200,
    renderCell:(params)=>{
        return(
            <>
            <button className="userListEdit">Edit</button>
            <i className="fa-regular fa-trash-can userListDelete"></i>
            </>
        )
    }
  },
];


export default function UserList() {
  return (
    <>
      <div className="userList">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={Userrows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
