import illustration from '../Assets/Illustration 2.svg'
import { AiFillCheckCircle } from 'react-icons/ai'
import '../Styling/Features.css'
function Features() {
    return (
        <div className="features">
            <div className="feature-img">
                <img src={illustration} />
            </div>
            <div className="features-list">
                <h4 className='features-bold'>We Provide Many Features You Can Use</h4>
                <p className='features-light'>You can explore the features that we provide
                    with fun and have their own functions each feature.</p>
                <div className="features-items">
                    <div className="list-items">
                        <p><AiFillCheckCircle className='ticks' />Powerfull online protection</p>
                        <p><AiFillCheckCircle className='ticks' />Internet without borders</p>
                        <p><AiFillCheckCircle className='ticks' />Supercharged VPN</p>
                        <p><AiFillCheckCircle className='ticks' />No specific time limits</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Features