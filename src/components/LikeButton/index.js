import './style.modules.css'
import {useState} from 'react'

const bgColors = ['purple','blue','green','yellow','orange','red']


export function LikeButton (){

    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }
    return (
        <button className="button" onClick={handleClick} style={{backgroundColor:bgColors[likes%bgColors.length]}}>{`${likes} likes`}</button>
    );
}