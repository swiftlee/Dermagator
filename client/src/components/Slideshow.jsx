import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import slides from "../config/slides";

const Slideshow = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const onChangeCarouselIndex = index => {
        if (slideIndex !== index)
            onChange(index);
    };

    const onChange = index => {
        setSlideIndex(index);
        updateLegend();
    };

    const updateLegend = () => {
        return <p>{slides[slideIndex].text}</p>
    };


    useEffect(() => {
        onChange(slideIndex);
    }, []);

    return (
        <div className="app">
            <Carousel className="carousel-wrapper" autoPlay={true} infiniteLoop={true} showStatus={false}
                      showThumbs={false} interval={6000} selectedItem={slideIndex}
                      dynamicHeight={false} stopOnHover={true} swipeable={true}
                      onChange={onChangeCarouselIndex}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.src} className="slide" alt={''}/>
                    </div>
                ))}

            </Carousel>
            <div>
                {updateLegend()}
            </div>
        </div>
    );
};

export default Slideshow;
