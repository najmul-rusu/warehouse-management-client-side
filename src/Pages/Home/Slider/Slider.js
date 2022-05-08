import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider01 from '../../../Images/slider-01.jpg';
import slider02 from '../../../Images/slider-02.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={slider01}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Chitwan</h3>
                    <p>The Ultimate Nepal Jungle Experience</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={slider02}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Last Resort</h3>
                    <p>Be brave and bungee</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Slider;