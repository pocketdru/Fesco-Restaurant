import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <img alt="grain-icon" src={require("./Icon.png")}></img>
                <h1 className="display-4">Making Food Taste Better.</h1>
                <h3 className="lead">Italian Specialities</h3>
                <p className="lead-2">We speak the good food language</p>
            </div>
        </div>
    )
}

export default Jumbotron;