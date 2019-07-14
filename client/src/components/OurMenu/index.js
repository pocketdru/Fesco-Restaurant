import React from "react";
import OrderBtn from "../OrderBtn";
import "./style.css";

function OurMenu() {
    return(
        <div className="container">
            <h3>Our Menu</h3>
            <p className="lead-2">The pleasure of variety on your plate</p>
            <div className="pizza container">
                <h5>.......... PIZZA ..........</h5>
                <div className="column">
                    <div className="menu-column">
                        <div className="menu-item">
                            <p className="item-name">MEXICANA</p>
                            <p className="item-description">Chicken, plum tomatoes, jalapeño pepper, mozzarella cheese.</p>
                            <p className="item-price">$19</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">MARGHERITA</p>
                            <p className="item-description">Parmigiano-reggiano cheese, mozzarella cheese, basil leaves.</p>
                            <p className="item-price">$16</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">HAWAIAN</p>
                            <p className="item-description">Mozzarella cheese, canadian bacon, pineapple and bacon.</p>
                            <p className="item-price">$18</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">CHICKEN</p>
                            <p className="item-description">Chicken breasts, tomato, black beans and parmesan cheese.</p>
                            <p className="item-price">$14</p>
                        </div>
                    </div>
                    <div className="menu-column">
                        <div className="menu-item">
                            <p className="item-name">The Meats</p>
                            <p className="item-description">Pepperoni, sausage, beef, bacon, and Canadian bacon.</p>
                            <p className="item-price">18$</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Zesty Italian Trio</p>
                            <p className="item-description">Italian sausage, salami, banana peppers, three-cheese blend.</p>
                            <p className="item-price">17$</p></div>
                        <div className="menu-item">
                            <p className="item-name">Philly Cheesesteak</p>
                            <p className="item-description">Philly sauce, steak, onions, green peppers, three-cheese blend.</p>
                            <p className="item-price">19$</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Spinach Alfredo</p>
                            <p className="item-description">Spinach and a rich, creamy garlic Parmesan Alfredo sauce.</p>
                            <p className="item-price">15$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pizza container">
                <h5>.......... DESSERTS ..........</h5>
                <div className="column">
                    <div className="menu-column">
                        <div className="menu-item">
                            <p className="item-name">CHOCOLATE HAZELNUT CHEESECAKE</p>
                            <p className="item-description">Nutella, toasted hazelnuts, cream cheese.</p>
                            <p className="item-price">$7</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">BANOFFEE TIRAMISU</p>
                            <p className="item-description">Dulce leche, graham crackers, whipping cream, bananas.</p>
                            <p className="item-price">$11</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">STICKY TOFFEE PUDDING</p>
                            <p className="item-description">Dates, brown sugar, whipped cream and vanilla ice cream.</p>
                            <p className="item-price">$13</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">PANNA COTTAS</p>
                            <p className="item-description">A traditional and delicious Italian custard. Served with warm hot fudge sauce.</p>
                            <p className="item-price">$14</p>
                        </div>
                    </div>
                    <div className="menu-column">
                        <div className="menu-item">
                            <p className="item-name">Torrone Semifreddo</p>
                            <p className="item-description">Acacia honey, hazelnut and almond torrone, hot fudge sauce, heavy cream.</p>
                            <p className="item-price">12$</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Honey-Sweetened Mascarpone</p>
                            <p className="item-description">Orange flower water, wildflower honey, raspberries, blackberries, strawberries, pistachios.</p>
                            <p className="item-price">10$</p></div>
                        <div className="menu-item">
                            <p className="item-name">Almond Cake with Pears & Crème Anglaise</p>
                            <p className="item-description">Orange zest, bartlett pears and crème Anglaise server with apricot-scented Moscato.</p>
                            <p className="item-price">12$</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Lemon-Honey Semifreddo</p>
                            <p className="item-description">Honey, heavy cream, lemon zest, ladyfingers with orange marmalade.</p>
                            <p className="item-price">9$</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Link to="/order">
                <button type="button" className="btn btn-primary btn-lg view-all-menu">Order & view all menu <i className="fas fa-caret-right"></i></button>
            </Link> */}
        </div>
    )   
}

export default OurMenu;