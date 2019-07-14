import "./style.css"; 
import React from "react";

function Footer() {
    return (
        <div className="container">
            <div className="contacts"> 
            <ul className="list-group">
                <li className="list-name list-group-item">ADDRESS:</li>
                <li className="list-group-item">17 Awesome Street, Denver, CO</li>
                <li className="list-group-item">SR 877900</li>
            </ul>
            <ul className="list-group">
                <li className="list-name list-group-item">OPENING HOURS:</li>
                <li className="list-group-item">Monday - Friday......................................8:00am - 11:00 pm</li>
                <li className="list-group-item">Saturday - Sunday....................................8:00am - 10:00 pm</li>
            </ul>
            {/* <ul className="list-group">
                <li className="list-name list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
            </ul> */}
            </div>
            <p> &copy; 2017 - Fesco All Right Reserved</p>
        </div>
    );
}

export default Footer;