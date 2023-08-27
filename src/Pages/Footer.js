import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faGlobe, faLinkedinIn, faInstagram, faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footHead d-flex">
                    <div className="logo">
                        <h1>zomato</h1>
                    </div>
                    <div className="footItem">
                        <button><img src="/Images/flag.png" alt="" /> India <FontAwesomeIcon icon={faAngleDown} /></button>
                        <button><FontAwesomeIcon icon={faGlobe} /> English <FontAwesomeIcon icon={faAngleDown} /></button>
                    </div>
                </div>
                <div className="footerNav">
                    <div className="navAbout">
                        <h1>ABOUT ZOMATO</h1>
                        <p>Who We Are</p>
                        <p>Blog</p>
                        <p>Work With Us</p>
                        <p>Investor Relations</p>
                        <p>Report Fraud</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="navAbout">
                        <h1>ZOMAVERSE</h1>
                        <p>Zomato</p>
                        <p>Blinkit</p>
                        <p>Feeding India</p>
                        <p>Hyperpure</p>
                        <p>Zomoland</p>
                    </div>
                    <div className="navAbout">
                        <h1>FOR RESTAURANTS</h1>
                        <p>Partner With Us</p>
                        <p>Apps For Us</p><br />
                        <h1>FOR ENTERPRISES</h1><br />
                        <p>Zomato For Enterprise</p>
                    </div>
                    <div className="navAbout">
                        <h1>LEARN MORE</h1>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Terms</p>
                        <p>Sitemap</p>
                    </div>
                    <div className="navAbout">
                        <h1>SOCIAL LINKS</h1>
                        <div className="footerIcon">
                        </div>
                    </div>
                </div>
                <hr width="100%" />
                <div className="copyright">
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer