import React from 'react'
import { useState, useRef } from 'react'

const Ref_sir = () => {

    const [name, setname] = useState('jasmi')

    const ref = useRef('')

    const newRefelement = useRef('')

    console.log(ref);

    function resetname() {
        setname('')
        ref.current.focus()

    }

    function ApplyBgcolor() {
        newRefelement.current.style.backgroundColor = "orange"
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <div ref={newRefelement} className='h-96 w-96'></div>
                    <input ref={ref} className
                        ='border-2  border-solid p-3 m-3' type="text" value={name} onChange={(e) => setname(e.target.value)} />
                    <button className='btn m-3' onClick={resetname}>reset</button>
                    <button className='btn' onClick={ApplyBgcolor}>click me</button>

                </div>
            </div>

        </div>
    )
}

export default Ref_sir
