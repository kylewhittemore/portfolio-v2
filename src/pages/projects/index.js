import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard';
import projects from './projects';
import './style.css';

export default function () {

    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className='d-flex flex-wrap justify-content-center'>
                    {projects && projects.map(project => {
                        return (
                            <ProjectCard project={project} />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}