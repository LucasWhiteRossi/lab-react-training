import './style.modules.css'

export function IdCard(props) {
    return (  
        <div className="displayArea">
            <div>
                <img src={props.picture} alt={props.firstName}/>
            </div>
            <div className='contentArea'>
                <p><strong>Last Name:</strong><span>{props.lastName}</span></p>
                <p><strong>First Name:</strong><span>{props.firstName}</span></p>
                <p><strong>Gender:</strong><span>{props.gender}</span></p>
                <p><strong>Height:</strong><span>{props.height}</span></p>
                <p><strong>Birth:</strong><span>{props.birth.toLocaleString('pt-BR')}</span></p>
            </div>
        </div>
    );
}

export default IdCard;