import React from 'react';
import PropTypes from 'prop-types';

import read from "../../assets/img/readed.svg";
import noRead from "../../assets/img/noReaded.svg";

import './statusReadingMessage.scss';

const StatusReadingMessage = ({isMe, isRead}) => {
    if(isMe) {
        return  isRead ? <img className={"message__icon-read"} src={read} alt=""/> : <img className={"message__icon-read"} src={noRead} alt=""/>
    }
};

StatusReadingMessage.propTypes = {
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
};

export default StatusReadingMessage;