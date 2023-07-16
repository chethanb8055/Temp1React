import App from "../App"
import './card.css'
function Card(props){
    // console.log(props.chi)
    return <div className="card">{props.children}</div>
}

export default Card;
