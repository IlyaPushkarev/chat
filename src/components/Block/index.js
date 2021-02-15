import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './block.scss';

const BlockCustom = ({children, className}) => {
    return (
        <div className={classNames('block',className)}>{children}</div>
    );
};

BlockCustom.propTypes = {
    className: PropTypes.string,
};

export default BlockCustom;