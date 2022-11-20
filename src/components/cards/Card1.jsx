import '../../Styling/Pricing.css'
import '../../components/cards/Card.css'
import free from '../../Assets/Free.svg'
import { BiCheck } from 'react-icons/bi'

function Card1(props) {
  return (
    <div className="price1">
      <img src={free} />
      <h5>{props.heading}</h5>
      <div className='card-price-section'>

        <p><BiCheck />{props.point1}</p>
        <p><BiCheck />{props.point2}</p>
        <p><BiCheck />{props.point3}</p>
        <p><BiCheck />{props.point4}</p>
        {props.point === 5 && <p><BiCheck />{props.point5}</p>}
        {props.point === 6 && <p><BiCheck />{props.point5}</p>}
        {props.point === 6 && <p><BiCheck />{props.point6}</p>}

      </div>

      {/* if count of features(points) is 5 then execute below code */}

      {props.point === 5 &&
        <div className='card-price-button-5'>
          <p className='price'>{props.price}<span className='per-month'> / mo</span></p>
          <button className='card-button'>Select</button>
        </div>
      }

      {/* if count of features(points) is 6 then execute below code */}
      {props.point === 6 &&
        <div className='card-price-button-6'>
          <p className='price'>{props.price}<span className='per-month'> / mo</span></p>
          <button className='card-button'>Select</button>
        </div>
      }

      {/* if count of features(points) is 4 then execute below code */}

      {props.point === 4 &&
        <div className='card-price-button'>
          <p className='price'>{props.price}</p>
          <button className='card-button'>Select</button>
        </div>
      }

    </div>
  )
}
export default Card1