import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Card, Button } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs';

import MemberList from "./memberList";

export default function ListCard() {
    const users = useSelector((state) => state.users);

    return (
        <Fragment>
            <Card style={{ width: '80%', margin: '3rem' }}>
                <Card.Body>
                    <Card.Header style={{ display: 'flex', backgroundColor: 'white'}}>
                        <Button variant="outline-primary" style={{ marginLeft: "auto" }}>
                            <Link to="/create">
                                <BsPlusLg />
                            </Link>
                        </Button>
                    </Card.Header>
                    <br></br>
                    <Card.Title> <h2> Team members </h2> </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted" style={{ padding: '1rem' }}>You have {users.users.length} team members.</Card.Subtitle>
                    <Card.Text>
                        <MemberList members={users} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}