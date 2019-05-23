import React from "react";
import "./style.css";

function AboutUs() {
    return (
        <div className="container">
            <div className="about-text">
                <h3>About Us</h3>
                <p>
                    Italian cuisine is food typical of Italy. It has developed through centuries, with roots stretching to antiquity.
                </p>
                <p>
                    Italian cuisine is known for its regional diversity, especially between the north and the south of the Italian peninsula. It offers an abundance of taste, and is one of the most popular and copied in the world. It influenced several cuisines around the world, chiefly that of the United States.
                    Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation. Ingredients and dishes vary by region. Many dishes that were once regional have proliferated with variations throughout the country.
                </p>
                <p>
                A dining establishment, often family run, with inexpensive prices and an informal atmosphere.
                </p>            
            </div>
            <div className="about-info">
                <div className="about-contacts">
                    <h4>Contacts</h4>
                    <p className="plainText">Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia.</p>
                    <p><span className="upper">address:</span></p>
                    <p className="address">17 Awesome Street, Denver, CO</p>
                    <p className="address">SR 877900</p>
                    <p><span className="view-map">view map</span></p>
                    <p><span className="upper">opening hours:</span></p>
                    <p className="time">Monday - Friday........................8:00am - 11:00 pm</p>
                    <p className="time">Saturday - Sunday......................8:00am - 10:00 pm</p>
                    <button type="button" className="btn btn-outline-secondary reservation">Table Reservation</button>
                </div>
                <div className="about-img">
                    <img alt="grilled-salmon" src={require("./grilled-salmon-steak-is-ready-picjumbo-com.png")}></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;