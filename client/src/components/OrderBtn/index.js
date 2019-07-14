import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./style.css";
import Order from "../../pages/Order/Order";

function OrderBtn() {
    return(
        <div className="container">
            <Link to="/order">
                <button type="button" className="btn btn-primary btn-lg view-all-menu">Order & view all menu <i className="fas fa-caret-right"></i></button>
            </Link>
        </div>
    )
}

export default OrderBtn;