import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import AboutUs from "../../components/AboutUs";
import Specialities from "../../components/Specialities";
import OurMenu from "../../components/OurMenu";
import Reservation from "../../components/Reservation";
import "./style.css";



function Home() {
    return (
        <div>
            <div className="main">
                <div className="container">
                        <Navbar/>
                        <Jumbotron/>
                </div>
            </div>
            <div className="about-us">
               <AboutUs/>
            </div>
            <div className="specialities">
                <Specialities/>
            </div>
            <div className="OurMenu">
                <OurMenu/>
            </div>
            <div className="Reservation">
                <Reservation/>
            </div>
        </div>
    )
}
 
export default Home;