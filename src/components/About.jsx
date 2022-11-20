import illustration from '../Assets/Illustration 1.svg'
import '../Styling/About.css'
import { HiUser, HiServer } from 'react-icons/hi'
import { IoLocationSharp } from 'react-icons/io5'
function About() {
    return (
        <div className="about">
            <div className="about-first-part">
                <div className="describe">
                    <p className='bold-para'>Want anything to be easy with <span className='bold-vpn'>LaslesVPN.</span></p>
                    <p className='sub-para'>Provide a network for all your needs with ease and fun using
                        <span > LaslesVPN </span>discover interesting features from us.</p>
                    <button className='get-started'>Get Started</button>
                </div>
                <div className="illustration">
                    <img src={illustration} />
                </div>
            </div>
            <div className="about-second-part">
                <div className="user">
                    <HiUser className='icon' />
                    <div className="numbers">
                        <span>90+</span>
                        <span>Users</span>
                    </div>
                </div>
                <div className="location">
                    <IoLocationSharp className='icon' />
                    <div className="numbers">
                        <span>30+</span>
                        <span>Locations</span>
                    </div>
                </div>
                <div className="server">
                    <HiServer className='icon' />
                    <div className="numbers">
                        <span>50+</span>
                        <span>Servers</span>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default About