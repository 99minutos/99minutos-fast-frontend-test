import React from 'react';
import PropTypes from 'prop-types';
import Order from '../Order';

const Orders = ({ container = { orders: [] } }) => {
    const { orders, name } = container;

    return (
        <div className="rightSide">
            <div className="ordersHeader">
                <h1>
                    Orders | <span className="spanTitle">Container {name}</span>
                </h1>
            </div>
            <div className="ordersList">
                <ul className="ordersUl">
                    {orders.map((item) => {
                        return (
                            <li className="myLi" key={item.counter}>
                                <Order
                                    counter={item.counter}
                                    type={item.type}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

Orders.propTypes = {
    container: PropTypes.object,
};

Orders.defaultProps = {
    container: undefined,
};

export default Orders;
