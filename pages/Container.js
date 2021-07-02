import React, {useState, useEffect} from 'react';
import Box from '../src/images/caja.png';

function container() {
  const [toggleState, setToggleState] = useState(1)
  const [data, setData] = useState(undefined)

  const toggletab = (index) => {
    setToggleState(index)
  }

  const apiGet = () => {
    fetch('http://localhost:3000/api/containers')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data)
      setData(data.data)
    })
  }
  useEffect(() => {
    apiGet()
    },[])

  return (
    <>
      {data ?  
      <div> 
      <section className='main'>
        <div className='container'>
          <h3>Container</h3>
          {data.containers.map(item => 
          <div className='order-container'>
            <button key={item.name} onClick={() => toggletab(item.name)} 
            className={toggleState === item.name ? 'order-list active' : 'order-list'}>
              {item.name}
            </button>
          </div>
          )}
        </div>

        <div className='order'>
          <div className='nav-order'>
            <h3 className='order-title'>Orders</h3>
            <p className='order-subtitle'>Container</p>
            <p className='order-name'>{data.containers[0].name}</p>
          </div>
            {data.containers.map(item => 
            <div className={toggleState === item.orders.counter ? 'order-list-child active' : 'order-list-child'}  className='order-list-child'>
              {item.orders.counter}
              <img src={Box} className='order-image'/>
              <div  className='sub-order'>
                <h4 className='order-counter'>{data.containers[0].orders[0].counter}</h4>
                <p className='order-types'>{data.containers[0].orders[0].type}</p>
              </div>
            </div>
            )}
        </div>
      </section>
    </div> : <h1>cargando data</h1>}
    </>
    
  );
}

export default container;