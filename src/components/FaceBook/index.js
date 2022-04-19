import profiles from '../../data/berlin.json'
import IdCard from '../IdCard';
import {useState} from 'react'

const countries = profiles.map((profile)=>{return profile.country})
                        .filter((element,index,arr)=>{return element === arr[index]})

export function FaceBook(){
    

    return (
    <div>
        {countries.map((country)=>{
            return (<button>{country}</button>);
        })}
        {profiles.map((profile)=>{
            return (
                <IdCard
                firstName={profile.firstName}
                lastName={profile.lastName}
                country={profile.country}
                isStudent={profile.isStudent?"Student":"Teacher"}
                picture={profile.img}
                />
            );
        })}
    </div>);
}