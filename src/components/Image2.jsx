import React from 'react'
import Wallpaper from './../assets/Image2.png'

function ImageComponent() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px'
        }}>
            <img src={Wallpaper} style={{
                borderRadius: '30px',
                width: '800px'
            }} alt="Wallpaper" />
        </div>
    )
}

export default ImageComponent
