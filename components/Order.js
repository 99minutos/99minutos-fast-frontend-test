import React from 'react'
import styles from "../styles/Home.module.css";

const Order = ({data, selectedContainer}) =>  {

    var mappedData = ( data.containers !== undefined) ?   data.containers.map(container=>(container)) :[]

    //  Get the orders corresponding to the selected container
    var filteredData = mappedData.filter( container => container.name == selectedContainer )

    // Saves each order into an array
    var orders = []
    filteredData.map(container=>{
        return container.orders.map(container=>(
           orders.push(container)
        ))
    })

    return (
        <div>
            <h1>Orders | Container {selectedContainer}</h1>
            {/* Shows every order obtained from "orders" */}
            {( data !== undefined && orders.length > 0) ? 
                <div className={styles.scroll}>  
                    {
                        orders.map(container=>(
                            <div key={container.counter} className={styles.orderItem}>
                                <div className={styles.box}>
                                    <img src="/images/boxIcon.png" alt="box-icon" />
                                </div>
                                <div className={styles.orderItemText}>
                                    <span className={styles.orderItemTitle}>{container.counter}</span>
                                    <span>{container.type}</span>
                                </div>
                            </div>
                        ))

                    }
                </div>
            : <p>There are no orders available for this container <i className="fa fa-frown-o"></i> </p> }
        </div>
    )
}

export default Order
