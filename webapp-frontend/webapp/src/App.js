import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Error from './Components/Error';
import { Foot } from './Components/Foot';
import AddCar from './Components/AddCar';

import About from './Components/About';
import Edit from './Components/Edit';


function App() {
  var cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      color: 'Silver',
      description: 'Reliable midsize sedan with advanced safety features.',
      type: 'Sedan',
      condition: 'New',
      price: 25000,
      url: '/images/2.jpg'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      color: 'Blue',
      description: 'Fuel-efficient compact car with a sporty design.',
      type: 'Coupe',
      condition: 'Used',
      price: 18000,
      url: '/images/3.jpg'
    },
    {
      id: 3,
      make: 'Ford',
      model: 'F-150',
      color: 'Red',
      description: 'Powerful pickup truck for work and everyday use.',
      type: 'Truck',
      condition: 'Like New',
      price: 35000,
      url: '/images/4.jpg'
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Malibu',
      color: 'White',
      description: 'Comfortable and stylish family sedan.',
      type: 'Sedan',
      condition: 'Used',
      price: 20000,
      url: '/images/4.jpg'
    },
    {
      id: 5,
      make: 'BMW',
      model: 'X5',
      color: 'Black',
      description: 'Luxurious SUV with advanced technology features.',
      type: 'SUV',
      condition: 'Certified Pre-owned',
      price: 50000,
      url: '/images/6.jpg'
    },
    {
      id: 6,
      make: 'Tesla',
      model: 'Model 3',
      color: 'Midnight Silver',
      description: 'Electric car with cutting-edge technology and performance.',
      type: 'Sedan',
      condition: 'New',
      price: 45000,
      url: '/images/7.jpg'
    },
    {
      id: 7,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      color: 'Gray',
      description: 'Elegant and powerful luxury sedan.',
      type: 'Sedan',
      condition: 'Like New',
      price: 55000,
      url: '/images/8.jpg'
    },

  ];
  const [carsList, setCarsList] = useState(cars)

  const [car, setCars] = useState(cars);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cars/');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error.message);
      }
    };

    fetchCars();
  }, []);
  const handleAddCar = (newCar) => {
    // Add the new car to the list
    setCarsList((prevCars) => [...prevCars, { id: Date.now(), ...newCar }]);


  };
  const handleEditCar = (newCar) => {
    // Add the new car to the list
    console.log("App = ", newCar)
    const updatedCars = carsList.map((c) => (c.id === newCar.id ? newCar : c));
    console.log("updated", updatedCars)

    console.log('Updated Cars:', updatedCars);
    setCarsList(updatedCars);
    console.log("Cars", carsList)

  };
  const handleDeleteCar = (deletedCar) => {
    // Remove the car with the matching ID from the list
    const updatedCars = carsList.filter((car) => car.id !== deletedCar.id);
    console.log(updatedCars)

    setCarsList(updatedCars);
    console.log(carsList)
  };

  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home cars={carsList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/newcar" element={<AddCar onAddCar={handleAddCar} />} />
        <Route path="/edit/:id" element={<Edit onEdit={handleEditCar} onDelete={handleDeleteCar} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
