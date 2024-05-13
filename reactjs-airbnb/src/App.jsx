import React from "react"
import Navbar from "./components/Navbar"
import Photogrid from "./components/Photogrid"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Photogrid />
            <Card />
        </div>
    )
}