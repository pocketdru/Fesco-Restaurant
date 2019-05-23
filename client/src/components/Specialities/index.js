import React from "react";
import "./style.css";

function Specialities() {
    return (
        <div className="container">
            <h3>Our Specialities</h3>
            <p className="lead-2">Serving great food from our family to yours.
            </p>
            <div className="gallery-spec .container">
                <div className="card mb-3">
                    <img src={require("./salad-bowl-with-mozzarella-and-cherry-tomatoes-picjumbo-com.png")} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Mozzarella salad............... 6.00$</h5>
                    </div>
                </div>
                <div className="card mb-3">
                    <img src={require("./preparing-salmon-steak-close-up-picjumbo-com.png")} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Salmon Steak............... 19.99$</h5>
                    </div>
                </div>
                <div className="card mb-3">
                    <img src={require("./yummy-chocolate-waffles-from-open-air-food-market-picjumbo-com.png")} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Chocolate Waffle...............5.00$</h5>
                    </div>
                </div>
                <div className="card mb-3">
                    <img src={require("./preparing-salami-pizza-picjumbo-com.png")} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Salami pizza...............11.00$</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialities;