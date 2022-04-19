import './style.modules.css'
export function NumbersTable(props){
    
    let numbers = []
    
    for (let i = 1; i <= props.limit; i++){
        numbers.push(i)
    }

    const bgColor = ['red','white']

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
        {numbers.map((num)=>{
            return (
                <div className="colored-number-box" style={{backgroundColor:bgColor[num%2]}}><div>{num}</div></div>
            );
        })
        }
        </div>
    );
}