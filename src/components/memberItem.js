import React from 'react'

import { ListGroup } from 'react-bootstrap'

export default function MemberItem({ member }) {
    const { name, lastname, phone, email } = member

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ name +" "+ lastname }</div>
                { phone }
                <br/>
                { email }
            </div>
        </ListGroup.Item>
    )
}
