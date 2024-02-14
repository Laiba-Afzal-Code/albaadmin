import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <>
      <div className="user">
        <div className="userTitleContainer">
          <h2 className="titleuser">Edit User</h2>
          <Link to={"/newUser"}>
            <button className="editUserBTn">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="userImg"
              />
              <div className="userShowTopTitle">
                <span className="showusername">Ahsan khan</span>
                <span className="showTitle">Softwere Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <div className="userShowtitle">Account Details</div>
              <div className="userShowInfo">
                <i className="fa-regular fa-user userIcon"></i>
                <span className="userShowInfoTitle">@ahsan234</span>
              </div>
              <div className="userShowInfo">
                <i className="fa-solid fa-calendar-days userIcon"></i>
                <span className="userShowInfoTitle">23-03-2002</span>
              </div>
              <div className="userShowtitle">Contact Information</div>
              <div className="userShowInfo">
                <i className="fa-solid fa-phone userIcon"></i>
                <span className="userShowInfoTitle">+92 304 9856790</span>
              </div>
              <div className="userShowInfo">
                <i className="fa-regular fa-envelope userIcon"></i>
                <span className="userShowInfoTitle">ahsan@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <i className="fa-solid fa-location-dot userIcon"></i>
                <span className="userShowInfoTitle">Punjab Pakistan</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit User Info</span>
            <form action="edit" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateitem">
                  <label>Username:</label>
                  <input
                    type="text"
                    placeholder="@ahsan234"
                    className="userUpdaeInput"
                  />
                </div>
                <div className="userUpdateitem">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    placeholder="Ahsan Khan"
                    className="userUpdaeInput"
                  />
                </div>
                <div className="userUpdateitem">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="ahsan@gmail.com"
                    className="userUpdaeInput"
                  />
                </div>
                <div className="userUpdateitem">
                  <label>Phone:</label>
                  <input
                    type="text"
                    placeholder="+92 304 9856790"
                    className="userUpdaeInput"
                  />
                </div>
                <div className="userUpdateitem">
                  <label>Address:</label>
                  <input
                    type="text"
                    placeholder="Punjab, Pakistan"
                    className="userUpdaeInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUplode">
                  <img
                    src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                    alt=""
                    className="uplodeImg"
                  />
                  <label htmlFor="file">
                    <i class="fa-solid fa-upload"></i>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateBtn" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
