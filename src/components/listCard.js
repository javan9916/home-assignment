import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index';

import { Card, Button } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs';

import MemberList from "./memberList";

export default function ListCard() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const { createUser } = bindActionCreators(actionCreators, dispatch)

    return (
        <Fragment>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Header style={{ display: 'flex' }}>
                        <Button variant="outline-primary" style={{ marginLeft: "auto" }}>
                            <Link to="/create">
                                <BsPlusLg />
                            </Link>
                        </Button>
                    </Card.Header>
                    <br></br>
                    <Card.Title>Team members</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted" style={{ padding: '1rem' }}>You have {users.users.length} team members.</Card.Subtitle>
                    <Card.Text>
                        <MemberList members={users} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}