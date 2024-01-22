import React from 'react'

export default function Card({name, title, imageUri}) {
    
    return (
        <div className="border-black border-4">
            <div>
                <img src={imageUri} alt=''/>
            </div>
            <div className="text-xl">
                <h2>{name}</h2>
            </div>
            <div className="text-xs">
                <h4>{title}</h4>
            </div>
        </div>
    )
}
