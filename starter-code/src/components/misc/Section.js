import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ to, img, title, description }) => (
    <div className="jumbotron">
        
            <Link to={to} className="text-dark">
                <img src={img} />
                <div className="container">
                <h1 className="display">{title}</h1>
                <p className="lead">{description}</p>
                </div>
            </Link>
        
    </div>
);

export default Section

