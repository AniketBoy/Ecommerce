import React, { useState } from 'react'
import "./Slider.scss"

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const data = [
    "img/pic1.jpg",
    "img/pic2.jpg",
    "img/pic3.jpg",
    "img/pic4.jpg"
];
const Slider = () => {
    const [currenrtSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        setCurrentSlide(currenrtSlide === 0 ? 3 : currenrtSlide - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currenrtSlide === 3 ? 0 : currenrtSlide + 1);
    };
    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currenrtSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />

            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}>
                    <KeyboardDoubleArrowLeftIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <KeyboardDoubleArrowRightIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider