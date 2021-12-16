import React from "react"
import {Characteristic as CharacteristicStyle} from './css/Characteristic.module.css'

const Characteristic = ({image, value, unitMeasure}) => {
    return (
        <div className={CharacteristicStyle}>
            <img src={"./assets/" + image} height="30px" width="30px" alt={image}/>
            <p>{value} {unitMeasure}</p>
        </div>
    )
}

export default Characteristic
