import React from 'react'

const Container = ({data, handledClick}) => {
    console.log(data.containers)

    return (
        <div>
            <h1>Container</h1>
            {(data.containers.length > 0) ? 
                <>
                    {
                        data.containers.map(container=>(
                            <p onClick={() => handledClick(container.name)}>{container.name}</p>
                        ))
                    }
                </>
            : <p>Loading...</p>   }
        </div>
    )
}

export default Container
