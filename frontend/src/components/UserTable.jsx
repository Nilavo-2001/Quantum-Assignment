import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/UserTable.css";
import { userContext } from "../context/UserProvider";
import { error } from "../utils/toasts";
import { useNavigate } from "react-router-dom";

const roles = ["Admin", "Publisher", "Reviewer", "Moderator"];

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const { userInfo, setUserInfo } = useContext(userContext);

  const navigate = useNavigate();

  const fetchUser = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/info",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      const response = await axios.request(config);

      if (response.status == 200) {
        const { data } = response.data;
        setUsers(data.users);
      }
    } catch (err) {
      const { response } = err;
      if (response && response.data && response.data.message)
        error(response.data.message);
      else console.error(err.message);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${day}/${month}/${year}`;
  };

  const logout = async () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    navigate("/login");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="page-container">
      <Button
        variant="secondary"
        type="submit"
        className="logout-button"
        onClick={logout}
      >
        Logout
      </Button>
      <Container className="table-container">
        <h2>User Table</h2>
        <Table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{formatDate(user.dob)}</td>
                <td>{user.email}</td>
                <td>{roles[Math.floor(Math.random() * 4)]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserTable;
