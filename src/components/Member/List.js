import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Card, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

import Group from '../List/Group';

import '../styles.css';


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
            <Card className="card">
                <Card.Body>
                    <Card.Header className="card-header">
                        <Link to="/add" className="right-button-container">
                            <Button variant="outline-primary" className="add-header-button">
                                <BsPlusLg />
                            </Button>
                        </Link>
                    </Card.Header>
                    <br/>
                    <Card.Title> <h2> Team members </h2> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted card-subtitle">You have {members.length} team members.</Card.Subtitle>
                    <Group members={members}/>
                </Card.Body>
            </Card>
        </Fragment>
    )
}