import React from 'react'
// import { cars } from './type'
import Card from './Card'
import { Link } from 'react-router-dom'


function Home({ cars }) {
    return (
        <div className='container ' >
            <Link to='/newcar'>
                <button className='btn btn-primary my-4'> Add new</button>
            </Link>
            <div className="container mt-5">
                <div className="row">
                    {cars.map((car) => (
                        <div key={car.id} className="col-md-4 mb-4">
                            <Card car={car} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home