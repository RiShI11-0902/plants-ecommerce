import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Just = () => {

    const [count, setCount] = useState(0)

    const ref = useRef()

    useEffect(() => {
        setInterval(() => {
            console.log(count);
            setCount(count + 10)
        }, 1000 * 10);
    }, [count])
    

  return (
    <div ref={ref} className='font-extrabold mx-auto w-fit mt-52 text-2xl'>
        {count}
    </div>
  )
}

export default Just