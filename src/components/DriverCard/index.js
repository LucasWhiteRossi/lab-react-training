import './style.modules.css'
import { Rating } from '../Rating';

export function DriverCard(props) {
    return (  
        <div className="driver-card">
            <img className="car-img" src={props.img} alt={props.name}/>
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="rating">
                    <Rating>{props.rating}</Rating>
                </div>
                <div className="car">{`${props.car.model} - ${props.car.licensePlate}`}</div>
            </div>
        </div>
    );
}
