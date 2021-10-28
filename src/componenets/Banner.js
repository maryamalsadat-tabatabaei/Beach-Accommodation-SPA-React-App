import React from 'react'

export default function Banner({children,title,subitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subitle}</p>
            {children}
        </div>
    )
}
