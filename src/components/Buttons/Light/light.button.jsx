import React from 'react'
import './light.button.scss'
function LightButton({onClick,children,p}) {
    return (<button onClick={onClick} style={{padding: !p ? '17px 37px' : p }} className='light'>{children}</button>)
}

export default LightButton