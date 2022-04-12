import './style.modules.css'
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.svg'

export function CreditCard(props) {
    
    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    };
    

    const expirationMonth = props.expirationMonth>=10 ? props.expirationMonth:`0${props.expirationMonth}`
    const lastFourDigits = props.number.slice(-5,-1);

    return (  
        <div className='card-area' style={divStyle}>
            <div className='logo-div'>
                {props.type==='Visa' && <img src={Visa} alt={props.type}/>}
                {props.type==='Master Card' && <img src={MasterCard} alt={props.type}/>}
            </div>
            <div className="info-area">
                <div className="numer-area">
                    <span className='encrypted'>{`●●●●  ●●●●  ●●●● `}</span>
                    <span className='last-digits'>{lastFourDigits}</span>
                </div>
                <div className="card-info">
                    <span>{`Expires ${expirationMonth}/${props.expirationYear}`}</span>
                    <span>{props.bank}</span>
                </div>
                <span>{props.owner}</span>
            </div>
        </div>
    );
}

export default CreditCard;