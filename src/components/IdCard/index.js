import './style.modules.css'

export function IdCard(props) {
    return (  
        <div className="displayArea">
            <div>
                <img className="imageArea" src={props.picture} alt={props.firstName}/>
            </div>
            <div className='contentArea'>
                { props.lastName && <p><strong>Last Name:</strong><span>{props.lastName}</span></p>}
                { props.firstName && <p><strong>First Name:</strong><span>{props.firstName}</span></p>}
                { props.gender &&<p><strong>Gender:</strong><span>{props.gender}</span></p>}
                { props.height && <p><strong>Height:</strong><span>{props.height}</span></p>}
                { props.birth && <p><strong>Birth:</strong><span>{props.birth.toDateString()}</span></p>}
                { props.country && <p><strong>Country:</strong><span>{props.country}</span></p>}
                { props.isStudent && <p><strong>Type:</strong><span>{props.isStudent}</span></p>}
            </div>
        </div>
    );
}

export default IdCard;