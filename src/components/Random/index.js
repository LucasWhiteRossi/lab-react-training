import './style.modules.css'

export function Random (props){
    return(
        <div className = "displayRandom">
            <span>{`Random number between ${props.min} and ${props.max} => ${Math.floor(Math.random()* (parseInt(props.max) - parseInt(props.min)))+ parseInt(props.min)}`}</span>
        </div>
    )
        
    
}