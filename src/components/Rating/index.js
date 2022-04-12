import './style.modules.css'

export function Rating(props) {
    
    const starNumber = Math.round(props.children) 
    const star = '★'
    const emptyStar = '☆'
    const starArray = []
    
    for (let i=0; i<starNumber; i++){
        starArray.push(star)
    }

    while (starArray.length < 5){
        starArray.push(emptyStar)
    }

    return (  
        <div className="valuation">
            <span>{starArray.join('')}</span>
        </div>
    );
}