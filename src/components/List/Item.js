import React from 'react'

import { useNavigate } from 'react-router-dom';

import { ListGroup } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';

export default function Item({ member }) {
    const { id, name, lastname, phone, email, role } = member

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        let memberId = e.currentTarget.value;

        navigate('/edit/' + memberId);
    };

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            value={id}
            key={id}
            onClick={handleNavigation}
            action>
                <div>
                    <BsPersonCircle style={{ width: '45px', height: '45px', margin: '1rem' }} />
                </div>

                <div className="ms-2 me-auto" style={{ marginTop: '0.5rem' }}>
                    {
                        role === 'regular' ?
                            <h6>{name + " " + lastname}</h6>
                            :
                            <h6>{name + " " + lastname + " (admin)"}</h6>
                    }
                    <p className='text-muted'>
                    {phone}
                    <br />
                    {email}
                    </p>
                    
                    
                    
                </div>
            
        </ListGroup.Item>
    )
}