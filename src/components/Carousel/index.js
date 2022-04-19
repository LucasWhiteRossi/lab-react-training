import {useState} from 'react'

export function Carousel (props) {    

    const [imgUrl,setImgUrl] = useState(0)
    
    function incrementImg(){
        if (imgUrl < props.images.length-1){
            setImgUrl(imgUrl + 1)
            console.log(imgUrl)
        }
    }
    
    function decrementImg(){
        if (imgUrl > 0){
            setImgUrl(imgUrl - 1)
            console.log(imgUrl)
        }
    }

    return (
        <div>
            <button onClick={incrementImg}>Left</button>
            <img src={props.images[imgUrl]} alt="..."/>
            <button onClick={decrementImg}>Right</button>
        </div>
        
    );
}