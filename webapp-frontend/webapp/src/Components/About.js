// AboutUs.js

import React from 'react';

const About = () => {
    return (
        <div className="container my-5 pt-5"  style={{ height: '80vh' }}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="mb-4">About Us</h2>
                    <p>
                        Welcome to our Car Management System! We are passionate about providing an efficient and user-friendly platform
                        for managing and showcasing your car inventory.
                    </p>
                    <p>
                        Our goal is to make it easy for individuals and businesses to keep track of their vehicles, whether you're a car
                        enthusiast, a dealership, or a rental service.
                    </p>
                    <p>
                        With our system, you can add, edit, and view details of various cars in your inventory. It's designed to be
                        intuitive and accessible, allowing you to focus on what matters most – your cars.
                    </p>
                    <p>
                        We are committed to continuous improvement and welcome your feedback. If you have any questions, suggestions, or
                        concerns, feel free to reach out to us.
                    </p>
                    <p>Thank you for choosing our Car Management System. Drive on!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
