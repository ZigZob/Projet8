import React from 'react';
import './_collapse.scss'
import { useState } from 'react';

function Collapse({ content, title }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse' >
            <h2 className='collapse__title' onClick={() => setIsOpen(!isOpen)}>
                {title}
                <i className={`fa-solid fa-chevron-down fa-lg collapse__icon ${isOpen === true ? 'collapse__icon--open' : ''}`}></i>
            </h2>
            <div className={`collapse__contentWrapper ${isOpen === true ? 'collapse__contentWrapper--open' : ''}`}>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapse