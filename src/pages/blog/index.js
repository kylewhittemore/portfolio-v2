import React from 'react';
import './style.css'
import Card from '../../components/ProjectCard';
import cardImage from './logo192.png'

export default function () {

    const project = {
        name: `project one`,
        image: cardImage,
        description: `An arbitrary description on a placeholder project`,
        technologies: [
            `Javascript`,
            `React`,
            `SQL`,
            `Node`,
            `Express`,
            `Sequelize`,
        ]
    }

    return (
        <div>
            <h1 className=''>blog page</h1>
            <Card project={project} />
        </div>
    )
}