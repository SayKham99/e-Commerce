import React from 'react'
import {ReactComponent as Star} from "../../../assets/icons/star.svg";
import {ReactComponent as Compare} from "../../../assets/icons/compare.svg";
import {ReactComponent as Cart} from "../../../assets/icons/shopping cart button.svg";
import LightButton from "../../Buttons/Light/light.button";
import GreenButton from "../../Buttons/Green/green.button";
import './LargeCard.scss'

function SmallCard({data}) {
    console.log(data)
    return (<>
        {data.map(card => (<div key={card.id} className='large'>
            <div className='large__header'>
                <Star className='star'/>
                <Compare className='compare'/>
                <img src={card.image} alt=""/>
                <p className='model'>{card.model}</p>
                <p className='company'>{card.company}</p>
            </div>
            <div className='large__body'>
                {card.prices.map(price => (
                      <div key={price.id} className='price'>
                          <p className='cost'>{price.price}</p>
                          <p className='title'>{price.title}</p>
                      </div>
                ))}
            </div>
            <div className='large__footer'>
                <LightButton p={'10px 24px'}>Подробнее</LightButton>
                <GreenButton p={'10px 24px'}> <Cart/> B корзину </GreenButton>
            </div>
        </div>))}
    </>)
}

export default SmallCard