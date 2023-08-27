import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function PopularCities() {
    return (
        <>
            <div className="container my-2 popularCities">
                <div className="row">
                    <h1 style={{paddingBottom:"20px"}}>Popular localities in and around Delhi NCR</h1>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Connaught Place</h1>
                                <p>257 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>

                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Sector 29</h1>
                                <p>144 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Sector 18, Noida</h1>
                                <p>209 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Rajouri Garden</h1>
                                <p>314 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Saket</h1>
                                <p>320 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>DLF Cyber City</h1>
                                <p>163 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>Golf Course Road</h1>
                                <p>155 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>DLF Phase 4</h1>
                                <p>224 Places</p>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div className="col places my-2">
                        <div className="placeBox d-flex">
                            <div className="placeName">
                                <h1>see more</h1>
                            </div>
                            <div className="placeErrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCities