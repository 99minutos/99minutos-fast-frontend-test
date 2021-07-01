import React, {useState, useEffect} from 'react';

function container() {
  const [togglestate, settoggleState] = useState(1)
  const [data, setData] = useState(undefined)

  const toggletab = (index) => {
    console.log(index)
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
            <div key={item.name} onClick={() => toggletab(item.name)} 
            className={togglestate === item.name ? 'order-list active' : 'order-list'}>
              {item.name}
            </div>
          )}
        </div>

        <div className='order'>
          <div className='nav-order'>
            <h3>Orders</h3>
            <p>Container</p>
            <p className='order-name'>{data.containers[0].name}</p>
          </div>
          <div className='order-list-child'>
            <img className='order-image'/>
            <div>
              <h4 className='order-counter'>{data.containers[1].orders[0].counter}</h4>
              <p className='order-types'>je</p>
            </div>
          </div>
        </div>
      </section>
    </div> : <h1>cargando data</h1>}
    </>
    
  );
}

export default container;