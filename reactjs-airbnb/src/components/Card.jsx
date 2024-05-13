import React from "react";
import "../index.css";
import rental5 from "../assets/images/rentals/rental5.jpg";
export default function Card() {
    return (
        <div className="card">
            <h1 className="card--title">
                Explore nearby
            </h1>
                    <h2 className="card--item-title">
                        Outdoor getaways
                    </h2>
            <div className="card--container">
                <div className="card--item">
                    <img src={rental5} alt="card" className="card--img" />
                    <p>
                    ⭐ 5.0/5 College Station, Texas
                    <p>
                        
                    </p>
                    </p>

                </div>
            </div>
        </div>
    );
}