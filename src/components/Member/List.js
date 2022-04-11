import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Card, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

import Group from '../List/Group';


/**
 * 
 * @description This view shows the list o current team members
 * @returns a template to see a list of team members
 */
export default function List() {
    // Getting the members from redux store
    const { members } = useSelector((state) => state.members);

    return (
        <Fragment>
            <Card style={{ width: "80%", margin: "3rem" }}>
                <Card.Body>
                    <Card.Header style={{ display: "flex", backgroundColor: "white" }}>
                        <Link to="/add" style={{ marginLeft: "auto" }}>
                            <Button variant="outline-primary" style={{ padding: "6px 10px" }}>
                                <BsPlusLg />
                            </Button>
                        </Link>
                    </Card.Header>
                    <br/>
                    <Card.Title> <h2> Team members </h2> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ padding: "0.5rem" }}>You have {members.length} team members.</Card.Subtitle>
                    <Group members={members}/>
                </Card.Body>
            </Card>
        </Fragment>
    )
}