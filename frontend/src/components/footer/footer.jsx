import "./footer.scss";
import NavLogo from "../../assets/Images/logo.svg"
import XTwitterLogo from "../../assets/Images/x-twitter-logo.svg"
import YouTubeLogo from "../../assets/Images/youtube-logo.svg";
import WhatsappLogo from "../../assets/Images/whatsapp-logo.svg";

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className="footer-container">
                <div className="main-footer">
                    <div className="zerodha-media-links">
                        <div className="footer-logo">
                            <img src={NavLogo} alt="" />
                        </div>
                        <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
                        <p>All rights reserved.</p>
                        <ul className="social">
                            <li>
                                <img src={XTwitterLogo} alt="TwitterLogo" />
                            </li>
                            <li>
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </li>
                        </ul>
                        <ul className="social">
                            <li>
                                <img src={YouTubeLogo} alt="YouTube Logo" />
                            </li>
                            <li>
                                <img src={WhatsappLogo} alt="Whatsapp Logo" />
                            </li>
                            <li>
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-groups">
                        <div className="footer-links">
                            <p>Account</p>
                            <ul>
                                <li>Open demat account</li>
                                <li>Minor demat account</li>
                                <li>NRI demat account</li>
                                <li>Commodity</li>
                                <li>Dematerialisation</li>
                                <li>Fund transfer</li>
                                <li>MTF</li>
                                <li>Referral program</li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <p>Support</p>
                            <ul>
                                <li>Contact us</li>
                                <li>Support portal</li>
                                <li>How to file a complaint?</li>
                                <li>Status of your complaints</li>
                                <li>Bulletin</li>
                                <li>Circular</li>
                                <li>Z-Connect blog</li>
                                <li>Downloads</li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <p>Company</p>
                            <ul>
                                <li>About</li>
                                <li>Philosophy</li>
                                <li>Press & media</li>
                                <li>Careers</li>
                                <li>Zerodha Cares (CSR)</li>
                                <li>Zerodha.tech</li>
                                <li>Open source</li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <p>Quick links</p>
                            <ul>
                                <li>Upcoming IPOs</li>
                                <li>Brokerage charges</li>
                                <li>Market holidays</li>
                                <li>Economic calendar</li>
                                <li>Calculators</li>
                                <li>Markets</li>
                                <li>Sectors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-middle-description">
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span>complaints@zerodha.com</span>, for DP related to <span>dp@zerodha.com</span>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on <span>SEBI SCORES</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p><span>Smart Online Dispute Resolution | Grievances Redressal Mechanism</span></p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <span>create a ticket here</span>.</p>

                    <p>India's largest broker based on networth as per NSE. <span>NSE broker factsheet</span></p>
                </div>
                <div className="footer-bottom-bar">
                    <ul>
                        <li>NSE</li>
                        <li>BSE</li>
                        <li>MCX</li>
                        <li>Terms & conditions</li>
                        <li>Policies & procedures</li>
                        <li>Privacy policy</li>
                        <li>Disclosure</li>
                        <li>For investor's attention</li>
                        <li>Investor charter</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
