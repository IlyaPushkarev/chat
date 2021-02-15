import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import './dialogItem.scss';
import {Time, StatusReadingMessage} from "../../components/index";

const getMessageTime = created_at => {
    if(isToday(created_at)) {
        return format(created_at, "HH:mm")
    }else {
        return format(created_at, "MM.dd.yyyy")
    }
}
const DialogItem = ({message, isMe}) => {
    // debugger
    return (
        <div className={classNames("dialog-item", {"dialog-item-online": message.user.isOnline})}>
           <div className="dialog-item__avatar">
               <img src={message.user.avatar} alt={`${message.user.fullname} avatar`}/>
           </div>
            <div className="dialog-item__info">
                <div className="dialog-item__info-header">
                    <b>{message.user.fullname}</b>
                    <span>
                        {/*13:03:03*/}
                        {getMessageTime(message.created_at)}
                        {/*<Time date={user.message.created_at}/>*/}
                    </span>
                </div>
                <div className="dialog-item__info-bottom">
                    <p>{message.text}</p>
                    {isMe && (message.user.unRead === 1) && <StatusReadingMessage isMe={true} isRead={message.isRead}/>}
                    {(message.user.unRead > 1) && <div className="dialog-item__unread-count">{message.unRead}</div>}
                </div>
            </div>
        </div>
    );
};

DialogItem.propTypes = {
    user: PropTypes.shape({
        fullname: PropTypes.string,
        avatar: PropTypes.string,
        message: PropTypes.shape({
                text: PropTypes.string,
                isRead: PropTypes.bool,
                created_at: PropTypes.object
            }),
        isOnline: PropTypes.bool,
        unRead: PropTypes.number,
    })
};

export default DialogItem;