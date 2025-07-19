import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import './bootstrap/css/bootstrap.min.css';
import HeroSlider from './components/HeroSlider';
import ServiceSection from './components/ServiceSection';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <HeroSlider />
        <ServiceSection />
    </div>
);

