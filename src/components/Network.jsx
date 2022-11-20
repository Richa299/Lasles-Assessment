import '../Styling/Network.css'
import global from '../Assets/Huge Global.svg'
import netlflix from '../Assets/Mask Group.svg'
import reddit from '../Assets/Mask Group (1).svg'
import amazon from '../Assets/Mask Group (2).svg'
import discord from '../Assets/Mask Group (3).svg'
import spotify from '../Assets/Mask Group (4).svg'

function Network() {
  return (
    <div className="network">
      <div className="network-heading">
        <h4>Huge Global Network of Fast VPN</h4>
        <p>See <span>LaslesVPN</span> everywhere to make to make it
          easier for you when you move locations</p>
        <img src={global} />
      </div>
      <div className="mask-group">
        <img src={netlflix} />
        <img src={reddit} />
        <img src={amazon} />
        <img src={discord} />
        <img src={spotify} />
      </div>
    </div>
  )
}
export default Network