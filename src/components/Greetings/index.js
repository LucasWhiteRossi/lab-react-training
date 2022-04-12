import './style.modules.css'

export function Greetings(props){
    return (
        <div className="greetingTag">
            {props.lang === "de" && <span>Hallo</span>}
            {props.lang === "es" && <span>Hola</span>}
            {props.lang === "en" && <span>Hello</span>}
            {props.lang === "fr" && <span>Bonjour</span>}
            <span>{props.children}</span>
        </div>
        
    )
}