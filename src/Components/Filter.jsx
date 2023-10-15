import React from 'react'

function Filter() {
  return (
    <div>
        <div>
        <p>Price</p>
        </div>
        <div>
            <input type="number" placeholder='from'/>
        </div>
        <div>
            <input type="number" placeholder='to' />
        </div>
        <div>
            <p>Discounted items</p>
        </div>
        <div>
        <input type="check-box" />
        </div>
        <div>
            <p>Sorted</p>
        </div>
        <div>
            <input type="text" placeholder='by default'/>
        </div>
        
       

    </div>
  )
}

export default Filter