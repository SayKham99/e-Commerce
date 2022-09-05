import React from 'react'
import {ReactComponent as Star} from "../../../assets/icons/star.svg";
import {ReactComponent as Compare} from "../../../assets/icons/compare.svg";
import LightButton from "../../Buttons/Light/light.button";
import './SmallCard.scss'

function SmallCard({data}) {
    console.log(data)
    return (<>
        {data.map(card => (<div key={card.id} className='small'>
            <div className='small__header'>
                <Star className='star'/>
                <Compare className='compare'/>
                <img src={card.image} alt=""/>
            </div>
            <div className='small__body'>
                <p className='model'>{card.model}</p>
                <p className='company'>{card.company}</p>
                <p className='price'>{card.price}</p>
            </div>
            <div className='small__footer'>
                <LightButton p={'10px 24px'}>Подробнее</LightButton>
            </div>
        </div>))}
    </>)
}

export default SmallCard