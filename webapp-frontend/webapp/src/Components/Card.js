import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Card = ({ car }) => {
    const { id, make, model, description, url } = car;

    return (
        <Link to={`/edit/${id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
                <img src={url} className="card-img-top" alt={`${make} ${model}`} />
                <div className="card-body">
                    <h5 className="card-title">{`${make} ${model}`}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
