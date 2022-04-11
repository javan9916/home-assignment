import React from 'react';

import { ListGroup } from 'react-bootstrap';
import Item from './Item';


/**
 * 
 * @description This is a ListGroup component to show the list of team members
 * @returns a ListGroup of team members
 */
export default function Group({ members }) {
    return (
        <ListGroup>
            { members.map((member) => (
                <Item member={ member } key={member.id.toString()}></Item>
            )) }
        </ListGroup>
    )
}
