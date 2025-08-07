import React, { useEffect, useRef, useState } from 'react';
import '../css/HeroSlider.css';

const slides = [
    {
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg',
        title: 'Never Stop Exploring',
        subtitle: 'Discover Africa',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
        label: 'Africa'
    },
    {
        image: 'https://i.pinimg.com/736x/4f/88/9c/4f889cba4d59f02968b965a23fbc45ee.jpg',
        title: 'Explore Your Travel Destinations like never before',
        subtitle: 'Discover Greece',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
        label: 'Greece'
    },
    {
        image: 'https://www.equatorial.by/sites/default/files/brazil_rio_isus003_15.jpg',
        title: 'Adventure Awaits',
        subtitle: 'Discover Brazil',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
        label: 'Brazil'
    }
];

const HeroSlider = () => {
    const [active, setActive] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [active]);

    const goTo = idx => setActive(idx);

    return (
        <div className="hero-slider">
            {slides.map((slide, idx) => (
                <div
                    className={`hero-slide${active === idx ? ' active' : ''}`}
                    key={idx}
                >
                    <div className="row align-items-center gx-0">
                        <div className="col-lg-6 p-5">
                            <div className="slider-content">
                                <span className="slider-subtitle">{slide.subtitle}</span>
                                <h1 className="slider-title">{slide.title}</h1>
                                <p className="slider-desc">{slide.desc}</p>
                                <button className="btn btn-slider mt-3">Discover <span>&#8250;</span></button>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <img src={slide.image} className="slider-img img-fluid" alt={slide.label} />
                            <div className="slider-label">{slide.label}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="slider-dots">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`dot${active === idx ? ' active' : ''}`}
                        onClick={() => goTo(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;