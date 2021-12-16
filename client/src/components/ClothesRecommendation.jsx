import React from "react";
import {ClothesRecommendation as ClothesRecommendationStyle} from './css/ClothesRecommendation.module.css'

const ClothesRecommendation = ({clothesMan, clothesWomen}) => {
    return (
        <div className={ClothesRecommendationStyle}>
            <img src={'./assets/'+clothesMan+'.png'} alt={clothesMan} height="256px" width="256px"/>
            <img src={'./assets/'+clothesWomen+'.png'} alt={clothesWomen} height="256px" width="256px"/>
        </div>
    )
}

export default ClothesRecommendation;
