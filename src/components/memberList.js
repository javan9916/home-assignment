import React from 'react'

import { ListGroup } from 'react-bootstrap'
import MemberItem from './memberItem'

export default function MemberList({ members }) {
    return (
        <ListGroup>
            {members.users.map((member) => (
                <MemberItem member={ member }></MemberItem>
            ))}
        </ListGroup>
    )
}
