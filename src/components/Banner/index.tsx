import React from 'react'
import './style.css'

interface BannerProps {
    img: string
    alt?: string
}

export const Banner = ({img, alt}: BannerProps) =>  {
    return (
        <header className='banner'>
            <img src={img} alt={alt}/>
        </header>
    )
}

export default Banner;