import "./newUser.css";

export default function NewUser() {
  return (
    <>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newuseritem">
            <label>Username</label>
            <input type="text" placeholder="@ahsan34" className="newUsername" />
          </div>
          <div className="newuseritem">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Ahsan khan"
              className="newUsername"
            />
          </div>
          <div className="newuseritem">
            <label>Email</label>
            <input
              type="email"
              placeholder="ahsan@gmail.com"
              className="newUsername"
            />
          </div>
          <div className="newuseritem">
            <label>Password</label>
            <input type="password" className="newUsername" />
          </div>
          <div className="newuseritem">
            <label>Phone</label>
            <input
              type="text"
              className="newUsername"
              placeholder="+92 309 3040509"
            />
          </div>
          <div className="newuseritem">
            <label>Address</label>
            <input
              type="text"
              className="newUsername"
              placeholder="Punjab, Pakistan"
            />
          </div>
          <div className="newuseritem">
            <label>Gender</label>
            <div className="newuserGender">
              <input type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" value="other" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="newuseritem">
            <label>Active</label>
            <select name="status" id="status">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        <button className="createnewUser" type="submit">
          Create User
        </button>
        </form>
      </div>
    </>
  );
}
