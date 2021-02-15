import React from 'react';
import {Button as BaseButton} from "antd";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const ButtonCustom = (props) => {
    return (
        <BaseButton {...props}
                    className={classNames('button',props.className, {"button__large": props.size === 'large'})}
        />
    );
};

ButtonCustom.propTypes = {
    className: PropTypes.string,
};

export default ButtonCustom;