import React from 'react'
import styles from "../styles/Home.module.css";
import 'font-awesome/css/font-awesome.min.css';

const Container = ({data, handledClick, selectedContainer}) =>  {
    
    return (
        <div>
            <h1 className={styles.white}>Containers</h1>
            {/* Shows every container obtained from the data source */}
            {( data.containers !== undefined) ? 
                <>  
                    {
                        data.containers.map((container)=>(
                            <div className={styles.containerItem} onClick={() => handledClick(container.name)}>
                                { selectedContainer == container.name ? 
                                    <span key={container.name} className={styles.selectedContainer} >{container.name}  <div className={styles.arrow}><i className="fa fa-arrow-right"></i></div> </span> : 
                                    <span key={container.name} >{container.name}</span>
                                } 
                        
                            </div>
                        ))
                    }
                </>
            : <div className={styles.loading}></div>    
           }
        </div>
    )
}

export default Container
