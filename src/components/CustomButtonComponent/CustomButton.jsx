import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children,...otherprops}) => {
    return (
        <div>
          <button className='custom-button'{...otherprops}>
             {children}
             </button>   
        </div>
    )
}

export default CustomButton

