import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './style.css';

export default function (props) {
    return (
        <Card className='project-card'>
            <Card.Img variant="top" src={props.project.image} />
            <Card.Body>
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
                <Button className='btn-purple'>Visit Demo!</Button>
            </Card.Body>
        </Card>
    )
}

