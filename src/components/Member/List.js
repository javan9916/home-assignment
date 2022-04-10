import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Card, Button } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs';

import Group from "../List/Group";

export default function List() {
    const { members } = useSelector((state) => state.members);

    console.log(members);

    return (
        <Fragment>
            <Card style={{ width: '80%', margin: '3rem' }}>
                <Card.Body>
                    <Card.Header style={{ display: 'flex', backgroundColor: 'white' }}>
                        <Link to="/create" style={{ marginLeft: "auto" }}>
                            <Button variant="outline-primary">
                                <BsPlusLg />
                            </Button>
                        </Link>
                    </Card.Header>
                    <br></br>
                    <Card.Title> <h2> Team members </h2> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ padding: '1rem' }}>You have {members.length} team members.</Card.Subtitle>
                    <Card.Text>
                        <Group members={members} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}