import React from 'react';
import PropTypes from 'prop-types';
import { FaBox } from 'react-icons/fa';

const Order = ({ counter, type }) => {
    return (
        <div className="order">
            <FaBox size={40} />
            <div className="description">
                <div>{counter}</div>
                <div>{type}</div>
            </div>
        </div>
    );
};

Order.propTypes = {
    counter: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Order;
