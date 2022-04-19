import './style.modules.css'
import {useState} from 'react'

export function ClickablePicture(props){

    const[url,setUrl] = useState(props.img);
    
    function handleClick(){
        
        if(url === props.img){
            setUrl(props.imgClicked);
        } else setUrl(props.img);

    }
    return (
        <img className="clickable-picture" src={url} onClick={handleClick} alt="img"/>
    );
}