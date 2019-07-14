import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import OurMenu from "../../components/OurMenu";
import SubMenu from "../../components/SubMenu";

import "./style.css";

function Order() {
    return (
        <div>
            <div className="main">
                <div className="container">
                        <Navbar/>
                        <div className="OurMenu">
                            <OurMenu/>
                        </div>
                        {/* <Jumbotron/> */}
                </div>
            </div>
            <div className="sub-menu">
                <SubMenu/>
            </div>
        </div>
    )
}

export default Order;