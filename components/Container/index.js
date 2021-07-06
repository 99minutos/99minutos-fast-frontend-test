import React from 'react';
import PropTypes from 'prop-types';

const ContainerCard = ({ name }) => {
    return <button className="button">{name}</button>;
};

ContainerCard.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ContainerCard;
