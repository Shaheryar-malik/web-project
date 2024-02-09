// AddCar.js
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { cars } from './type';
import { useNavigate } from 'react-router-dom';
const Edit = ({ onEdit, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carData, setCarData] = useState();
    useEffect(() => {
        const selectedCar = cars.find((car) => car.id.toString() === id);
        setCarData(selectedCar);
        console.log(selectedCar)
    }, [id]);

    if (!carData) {
        return <p>Loading...</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(carData)
    };

    const handleAddCar = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/cars/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });

            if (!response.ok) {
                throw new Error('Failed to add a new car');
            }

            // Assuming the response includes the newly added car data
            const addedCar = await response.json();

            // Call the callback function to update the state in the parent component
        } catch (error) {
            console.error('Error adding a new car:', error.message);
        }
        console.log(carData)
        onEdit(carData)

        // Reset the form after successfully adding a new car
        setCarData({
            make: '',
            model: '',
            color: '',
            description: '',
            type: '',
            condition: '',
            price: 0,
            url: '',
        });
        navigate('/');
    };

    const handledeleteCar = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/cars/', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData.id),
            });

            if (!response.ok) {
                throw new Error('Failed to add a new car');
            }

            // Assuming the response includes the newly added car data
            const addedCar = await response.json();

            // Call the callback function to update the state in the parent component
        } catch (error) {
            console.error('Error adding a new car:', error.message);
        }
        console.log(carData)
        onDelete(carData)

        // Reset the form after successfully adding a new car
        setCarData({
            make: '',
            model: '',
            color: '',
            description: '',
            type: '',
            condition: '',
            price: 0,
            url: '',
        });
        navigate('/');
    };


    return (
        <div className="container my-5" style={{ height: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Add New Car</h2>
                    <form>
                        <div className="form-group my-2">
                            <label htmlFor="make">Make:</label>
                            <input
                                type="text"
                                className=" form-control"
                                id="make"
                                name="make"
                                value={carData.make}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="model">Model:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="model"
                                name="model"
                                value={carData.model}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="color">Color:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="color"
                                name="color"
                                value={carData.color}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={carData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="type">Type:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                name="type"
                                value={carData.type}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="condition">Condition:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="condition"
                                name="condition"
                                value={carData.condition}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={carData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="url">Image URL:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="url"
                                name="url"
                                value={carData.url}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='my-3'>

                            <button type="button" className="btn btn-primary " onClick={handleAddCar}>
                                Edit Car
                            </button>
                            <button type="button" className="btn btn-danger mx-5" onClick={handledeleteCar}>
                                Delete Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
