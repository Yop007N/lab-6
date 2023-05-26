import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  //GET ALL USERS
  const getTasks = () => {
    fetch("https://2a2ib236wa.execute-api.us-east-1.amazonaws.com/v1/test/")
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
      });
  };

  const UpdateTask = (id) => {
    window.location = "/update/" + id;
  };

  const deleteTask = (id) => {
    fetch(
      `https://2a2ib236wa.execute-api.us-east-1.amazonaws.com/v1/test/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        window.location.href = "/";
      })
      .catch((result) => {
        alert("Error al eliminar");
        getTasks();
      });
  };

  return (
    <Card style={{ margin: "15px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.name}</td>
              <td>{todo.surname}</td>
              <td>{todo.lastname}</td>
              <td>{todo.phone}</td>
              <td>{todo.email}</td>
              <td>
                <Button onClick={() => deleteTask(todo.id)} variant="danger">
                  Delete
                </Button>
                <Button onClick={() => UpdateTask(todo.id)} variant="primary">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
