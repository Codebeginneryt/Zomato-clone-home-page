import React from 'react'

function DeliveryFoodItem(props) {
    return (
        <>
            <div className="foodItemBox">
                <h1>Inspiration for your first order</h1>
                <div className="foodItem d-flex">
                    <div className="foodCard" onClick={props.biryani}>
                        <div className="foodImg">
                            <img src="/Images/biryani.avif" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Biryani</p>
                        </div>
                    </div>
                    <div className="foodCard" onClick={props.pizzaItem}>
                        <div className="foodImg">
                            <img src="/Images/pizza.avif" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Pizza</p>
                        </div>
                    </div>
                    <div className="foodCard" onClick={props.chicken}>
                        <div className="foodImg">
                            <img src="/Images/chicken.webp" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Chicken</p>
                        </div>
                    </div>
                    <div className="foodCard" onClick={props.burger}>
                        <div className="foodImg">
                            <img src="/Images/burger.avif" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Burger</p>
                        </div>
                    </div>
                    <div className="foodCard" onClick={props.thali}>
                        <div className="foodImg">
                            <img src="/Images/thali.avif" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Thali</p>
                        </div>
                    </div>
                    <div className="foodCard" onClick={props.springroll}>
                        <div className="foodImg">
                            <img src="/Images/role.avif" alt="" />
                        </div>
                        <div className="foodName">
                            <p>Rolls</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryFoodItem