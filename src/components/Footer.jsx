import logo from '../Assets/Logo.svg'
import '../Styling/Footer.css'
import fb from '../Assets/Facebook.svg'
import Twitter from '../Assets/Twitter.svg'
import insta from '../Assets/Instagram.svg'
function Footer() {
    return (
        <div className="Footer">
            <div className="footer-left">
                <img src={logo} />
                <p>LaslesVPN is a private virtual network
                    that has unique features and has high security.
                </p>
                <p className='social-media-icons'>
                    <img src={fb} />
                    <img src={Twitter} />
                    <img src={insta} />
                </p>
                <p className='copyright'><span>&#169;2020LaslesVPN</span></p>
            </div>
            <div className="footer-right">

                <div className="product">
                    <p>Product</p>
                    <ul>
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Location</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="engage">
                    <p>Engage</p>
                    <ul>
                        <li>LaslesVPN</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="earn-money">
                    <p>Earn-Money</p>
                    <ul>
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Footer