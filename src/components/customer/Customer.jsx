import '../customer/Customer.css'
import {AiFillStar} from 'react-icons/ai'
function Customer(props){
    return(
        <div className="customer">
            <div className="profile-part">
            <img src={props.profile1}/>
            <p className='customer-name'>{props.name}
            <p className='customer-city'>{props.city}</p></p>
             <p className='star'><span>4.5</span><AiFillStar/></p>
            </div>
           
           <p className='comments'>{props.comment}</p>
        </div>
    )
}
export default Customer