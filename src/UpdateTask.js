import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function UpdateTask() {
    const { id } = useParams();

    useEffect(() => {
        fetch(
            `https://2a2ib236wa.execute-api.us-east-1.amazonaws.com/v1/test/${id}`
        )
            .then((res) => res.json())
            .then((result) => {
                setTitle(result.title);
                setDescription(result.description);
                setName(result.name);
                setSurname(result.surname);
                setLastname(result.lastname);
                setPhone(result.phone);
                setEmail(result.email);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            id: id,
            title: title,
            description: description,
            name: name,
            surname: surname,
            lastname: lastname,
            phone: phone,
            email: email,
        };
        console.log(data);
        fetch("https://2a2ib236wa.execute-api.us-east-1.amazonaws.com/v1/test", {
            method: "PUT",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert("Registrado con exito");
                window.location.href = "/";
            })
            .catch(() => {
                alert("Error al registrar");
                window.location.href = "/";
            });
    };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Container className="d-flex h-100">
            <Row className="m-auto align-self-center">
                <Col>
                    <Card>
                        <Card.Header as="h5">Edit</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={title}
                                        placeholder="Enter title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={description}
                                        placeholder="Enter description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        placeholder="Enter name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={surname}
                                        placeholder="Enter surname"
                                        onChange={(e) => setSurname(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="lastname">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastname}
                                        placeholder="Enter lastname"
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={phone}
                                        placeholder="Enter phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={email}
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
