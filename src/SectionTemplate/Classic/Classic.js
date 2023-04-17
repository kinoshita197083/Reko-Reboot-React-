import React from 'react';
import './Classic.css'

export default function ClassicSection(props) {

    const { ulIncluded, list, heading, firstPara, secondPara, thirdPara } = props;

    return (
        <section className='container'>
            <h1 className='section-heading'>{heading}</h1>
            <p className='section-paragraph'>{firstPara}</p>
            <p className='section-paragraph'>{secondPara}</p>
            <p className='section-paragraph'>{thirdPara}</p>

            {/* Unorder List included? */}
            <ul className='section-ul' style={{ display: ulIncluded ? 'block' : 'none' }}>
                {ulIncluded && list ?

                    props.list.map(item => {
                        return (
                            <li>{item.name}</li>
                        )
                    }) : null}
            </ul>

            {/* Button or Links */}
            <div className='flex'>
                {props.children}
            </div>
        </section>
    )
}