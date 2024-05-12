import React from "react"
import photogrid from "../assets/images/photo-grid.jpg"
import "../index.css"

export default function Photogrid() {
    return (
        <div className="photogrid">
            <img src={photogrid} alt="photogrid" className="photogrid--img" />
            <h1 className="photogrid--title">
                Welcome to Airbnb Clone!
            </h1>
            <p className="photogrid--text">
                This is a clone of the Airbnb website. 
                Feel free to explore the site and book your next vacation!
            </p>
            
        </div>
    )
}
