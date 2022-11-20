import '../Styling/Testimonials.css'
import '../components/customer/Customer.css'
import Customer from './customer/Customer'
import profile2 from '../Assets/profile1.png'
import profile1 from '../Assets/profile2.png'
import profile3 from '../Assets/profile3.png'
import {BsArrowLeftCircle, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {VscCircleFilled} from 'react-icons/vsc'

function Testimonials(){
    return(
       <div className="Testimonials">
        <div className="test-heading">
            <h3>Trusted by Thousands of Happy Customer</h3>
            <p className='test-sub-part'>These are the stories of our customers who have 
                joned us with great pleasure when using this crazy feature.</p>
        </div>
        <div className="customer-card">
        <Customer picture={"pic1"} profile1={profile1} name={"Viezh Robert"} city={"Warsaw, Poland"} 
        comment={"“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."} />
        <Customer picture={"pic2"}  profile1={profile2} name={"Yessica Christy"} city={"Shanxi, China"} 
        comment={"“I like it because I like to travel far and still can connect with high speed.”."} />
        <Customer picture={"pic3"}  profile1={profile3} name={"Kim Young Jou"} city={"Seoul, South Korea"} 
        comment={"“This is very unusual for my business that currently requires a virtual private network that has high security.”."} />
        </div>  
        <div className="arrows">
            <div className="items-scroll">
                <span></span>
                {Array.from({length:3}).map(()=>(
                    <span className='dots'><VscCircleFilled/></span>
                ))}
            </div>
            <div className="left-right">
            
            <span><BsArrowLeftCircle/></span>
            <BsFillArrowRightCircleFill/>
            </div>
        </div>      
       </div>
    )
}
export default Testimonials