import React from "react";
import { motion } from "framer-motion";


const rooms = [
    {
        id: 1,
        tag: "Luxury Rooms",
        price: 1299,
        address: "18 New Street Miami, OR 97219",
        beds: 8,
        baths: 8,
        area: "545m2",
        floor: 3,
        parking: "6 spots",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e553ee73574085.5c0e70eb0566d.jpg",
    },
    {
        id: 2,
        tag: "Luxury Rooms",
        price: 1599,
        address: "54 Mid Street Florida, OR 27001",
        beds: 6,
        baths: 5,
        area: "450m2",
        floor: 3,
        parking: "8 spots",
        img: "https://static.tildacdn.com/tild3634-3430-4066-a235-363034666536/311424057_WxH.jpg",
    },
    {
        id: 3,
        tag: "Luxury Rooms",
        price: 1449,
        address: "26 Old Street Miami, OR 38540",
        beds: 5,
        baths: 4,
        area: "225m2",
        floor: 3,
        parking: "10 spots",
        img: "https://i.pinimg.com/originals/19/06/d5/1906d5f7c66bbd6483ac925c1a41e4ce.jpg",
    },
    {
        id: 4,
        tag: "Seaside House",
        price: 899,
        address: "7 Coastline Ave, Santa Monica, CA",
        beds: 4,
        baths: 3,
        area: "320m2",
        floor: 2,
        parking: "2 spots",
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    },
    {
        id: 5,
        tag: "Modern Home",
        price: 600,
        address: "12 River Road, Austin, TX",
        beds: 3,
        baths: 2,
        area: "180m2",
        floor: 2,
        parking: "1 spot",
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    },
    {
        id: 6,
        tag: "Mountain Retreat",
        price: 999,
        address: "99 Pinecrest Blvd, Aspen, CO",
        beds: 6,
        baths: 5,
        area: "400m2",
        floor: 3,
        parking: "4 spots",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    },
];

const currency = (n) => {
    return n.toLocaleString(undefined, { minimumFractionDigits: 0 });
};

export default function RoomGallery() {
    return (
        <div className="gallery-container">
            <div className="gallery-header text-center">
                <h2 className="service-subtitle">Luxury & Seaside Rooms</h2>
                <h2 className="service-title">Book A Room Now!</h2>
                <p className="service-desc">
                    Explore our exclusive collection of luxury rooms and seaside houses.
                    
                    Book your dream stay today!
                </p>
                <hr className="gallery-divider" />
            </div>

            <div className="gallery-grid">
                {rooms.map((r) => (
                    <motion.article
                        key={r.id}
                        whileHover={{ translateY: -6 }}
                        className="gallery-card"
                    >
                        <div className="gallery-image-wrapper">
                            <img src={r.img} alt={r.address} className="gallery-image" />

                            <span className="gallery-tag">{r.tag}</span>
                            <span className="gallery-price">${currency(r.price)}</span>
                        </div>

                        <div className="gallery-details">
                            <h3 className="gallery-address">{r.address}</h3>

                            <div className="gallery-info">
                                <div>
                                    <strong>Bedrooms:</strong> {r.beds}
                                </div>
                                <div>
                                    <strong>Bathrooms:</strong> {r.baths}
                                </div>
                                <div>
                                    <strong>Area:</strong> {r.area}
                                </div>
                                <div>
                                    <strong>Floor:</strong> {r.floor}
                                </div>
                                <div className="full-width">
                                    <strong>Parking:</strong> {r.parking}
                                </div>
                            </div>

                            <hr className="gallery-divider" />

                            <div className="button-container">
                                <button className="visit-button book-btn">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
