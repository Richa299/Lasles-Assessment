import '../Styling/Pricing.css'
import Card1 from './cards/Card1'
function Pricing() {
    return (
        <div className="pricing">
            <div className="price-heading">
                <h3>Choose Your Plan</h3>
                <p>Let's choose the packet which is best for you
                    and explore it happily and cheerfully</p>
            </div>
            <div className="price-cards">
                <Card1 point={4} heading={"Free Plan"} point1={"Unlimited Bandwidth"}
                    point2={"Encrypted Connection"}
                    point3={"No Traffic Logs"}
                    point4={"Works on All Devices"}
                    price={"Free"} />

                <Card1 point={5} heading={"Standard Plan"} point1={"Unlimited Bandwidth"}
                    point2={"Encrypted Connection"}
                    point3={"Yes Traffic Logs"}
                    point4={"Works on All Devices"}
                    point5={"Connect Anywhere"}
                    price={"$9"} />

                <Card1 point={6} heading={"Premium Plan"} point1={"Unlimited Bandwidth"}
                    point2={"Encrypted Connection"}
                    point3={"Yes Traffic Logs"}
                    point4={"Works on All Devices"}
                    point5={"Connect Anywhere"}
                    point6={"Get New Features"}
                    price={"$12"} />
            </div>
        </div>
    )
}
export default Pricing