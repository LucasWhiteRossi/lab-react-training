import './style.modules.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

import {useState} from 'react'

const diceFaces = [dice1,dice2,dice3,dice4,dice5,dice6]

export function Dice (){
    const [dice, setDice] = useState(diceEmpty)

    function handleClick(){
        if(dice===diceEmpty){
            const rand = Math.floor(Math.random()*diceFaces.length)
            setDice(diceFaces[rand])
        } else {
            setDice(diceEmpty)
        }
    }
    return (
        <img className="dice-box" src={dice} onClick={handleClick} alt="..."/>
    );
}