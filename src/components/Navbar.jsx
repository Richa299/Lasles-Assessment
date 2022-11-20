import logo from '../Assets/Logo.svg'
import '../Styling/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navbar-items">
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="signin-section">
                <p>Sign In</p>
                <button className='signup'>Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar