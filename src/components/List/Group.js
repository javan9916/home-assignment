import React from 'react'

import { ListGroup } from 'react-bootstrap'
import Item from './Item'

export default function Group({ members }) {
    return (
        <ListGroup variant="flush">
            { members.map((member) => (
                <Item member={ member }></Item>
            )) }
        </ListGroup>
    )
}
