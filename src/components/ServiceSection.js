import React from 'react';

const services = [
    {
        icon: '🌴',
        title: 'Activities',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        icon: '🌍',
        title: 'Travel Arrangement',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        icon: '🏁',
        title: 'Private Guide',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        icon: '🗺️',
        title: 'Location Manager',
        desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    }
];

const ServiceSection = () => (
    <section className="service-section py-5">
        <div className="container">
            <div className="text-center mb-5">
                <span className="service-subtitle">SEXY &amp; HEALTHY</span>
                <h2 className="service-title">Our Services</h2>
                <p className="service-desc">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <div className="row justify-content-center">
                {services.map((service, idx) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={idx}>
                        <div className="service-card text-center h-100">
                            <div className="service-icon mb-3">{service.icon}</div>
                            <h5 className="service-card-title">{service.title}</h5>
                            <p className="service-card-desc">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServiceSection;