import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>

            <div className="content">

                

                <div className="footer-item">
                <div className="main">
                        <h3>Job HUNTER</h3>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                    <ul>
                        <li className="brand">Company</li>
                        <li>About us</li>
                        <li>Work</li>
                        <li>Latest Work</li>
                        <li>Carrers</li>
                    </ul>
                    <ul>
                        <li className="brand">Product</li>
                        <li>Plans & Pricing</li>
                        <li>Work</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                    <ul>
                        <li className="brand">Support</li>
                        <li>Help desk</li>
                        <li>Sales</li>
                        <li>Become a partner</li>
                        <li>Devlopers</li>
                    </ul>
                    <ul>
                        <li className="brand">Contact</li>

                        <li>524 Broadway, NYC</li>
                        <li>+1 777 - 978 - 5570</li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;