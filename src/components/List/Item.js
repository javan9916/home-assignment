import React from 'react'

import { useNavigate } from 'react-router-dom';

import { ListGroup } from 'react-bootstrap';

export default function Item({ member }) {
    const { id, name, lastname, phone, email, role } = member

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        let memberId = e.target.value;

        navigate('/edit/' + memberId);
    };

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            value={id}
            onClick={handleNavigation}
            action>

            <div className="ms-2 me-auto">
                {
                    role === 'regular' ?
                        <div className="fw-bold">{name + " " + lastname}</div>
                        :
                        <div className="fw-bold">{name + " " + lastname + " (admin)"}</div>
                }
                { phone }   
                <br/>
                { email }   
            </div>
            
        </ListGroup.Item>
    )
}