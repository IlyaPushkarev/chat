import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ukLocale from "date-fns/locale/uk";

import './time.scss';

const Time = ({date}) => {
    // debugger
    return formatDistanceToNow(date, {addSuffix: true, local:ukLocale});
};

Time.propTypes = {
    date: PropTypes.object,
};

export default Time;