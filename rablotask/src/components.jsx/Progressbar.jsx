import React, { useState } from 'react'

function Progressbar ({status}) {
    const [style,setStyle]=useState({});
    setTimeout(() => {
        const newStyle ={
            opacity:1,
            width: `${status}%`
        }
        setStyle(newStyle);
    }, 200);
  return (
    <div className='progress'>
        <div className='progress-done' style={style}>{status}%</div>
    </div>
  )
}
export default Progressbar
