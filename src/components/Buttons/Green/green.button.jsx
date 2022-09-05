import React from 'react'
import './green.button.scss'

function GreenButton({children, onClick,p}) {
    return (<button onClick={onClick} style={{padding: !p ? '17px 37px' : p }} className='green'>{children}</button>)
}

export default GreenButton