import React from 'react';
import ImageMeSrc from './../assets/ImageMe.jpg';  // เปลี่ยนชื่อเป็น ImageMeSrc เพื่อไม่ให้ซ้ำกับชื่อฟังก์ชัน

function ImageMe() {
    return (
        <>
            <img src={ImageMeSrc} width={'300px'} alt="ImageMe" style={{ borderRadius: '30px' }} />
        </>
    );
}

export default ImageMe;
