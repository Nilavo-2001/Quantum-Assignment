import React from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/UserTable.css";

const users = [
  {
    id: 1,
    name: "Michael Holz",
    dob: "04/10/2013",
    email: "michael@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Paula Wilson",
    dob: "05/08/2014",
    email: "paula@example.com",
    role: "Publisher",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    dob: "11/05/2015",
    email: "antonio@example.com",
    role: "Publisher",
  },
  {
    id: 4,
    name: "Mary Saveley",
    dob: "06/09/2016",
    email: "mary@example.com",
    role: "Reviewer",
  },
  {
    id: 5,
    name: "Martin Sommer",
    dob: "12/08/2017",
    email: "martin@example.com",
    role: "Moderator",
  },
  // Add more users as needed
];

const UserTable = () => {
  return (
    <div className="page-container">
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.dob}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserTable;
