import React from 'react'

function TopBrands() {
    return (
        <>
            <div className="brandItemBox">
                <h1>Top brands for you</h1>
                <div className="brandItem d-flex">
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/mcdon.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>MCDonald's</p>
                        </div>
                    </div>
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/dominos.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>Domino's Pizza</p>
                        </div>
                    </div>
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/burgerking.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>Burger King</p>
                        </div>
                    </div>
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/subway.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>Subway</p>
                        </div>
                    </div>
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/haldiram.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>Haldiram's</p>
                        </div>
                    </div>
                    <div className="brandCard">
                        <div className="brandImg">
                            <img src="/Images/kfc.avif" alt="" />
                        </div>
                        <div className="brandName">
                            <p>KFC</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default TopBrands