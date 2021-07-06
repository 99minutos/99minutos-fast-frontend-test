import React, { useState, useEffect } from 'react';
import ContainerCard from '../Container';
import OrdersList from '../OrdersList';

const Containers = () => {
    const [containers, setContainers] = useState([]);
    const [selectedContainer, setSelectedContainer] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/api/containers')
            .then((response) => response.json())
            .then(({ data }) => {
                setContainers(data.containers);
            });
    }, []);

    const handleClick = (event) => {
        const container = containers.find(
            (item) => item.name === event.target.innerText
        );
        setSelectedContainer(container);
    };

    return (
        <>
            {containers.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <div className="mainContainer">
                    <div className="leftSide">
                        <h1>Containers</h1>
                        <ul className="containersUl">
                            {containers.map((item) => {
                                return (
                                    <li
                                        className="myLi"
                                        key={item.name}
                                        onClick={handleClick}
                                    >
                                        <ContainerCard name={item.name} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <OrdersList container={selectedContainer} />
                </div>
            )}
        </>
    );
};

export default Containers;
