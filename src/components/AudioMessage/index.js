import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ukLocale from "date-fns/locale/uk";
import classnames from "classnames";

import read from "../../assets/img/readed.svg";
import noRead from "../../assets/img/noReaded.svg";
import "./audioMessage.scss";
import {DialogItem} from "../../components/index";
import Dialogs from "../Dialogs";


const AudioMessage = ({avatar, text, date, isMe, isRead, attachments, isTyping}) => {
    return (
        <div className={classnames("message", {
            "message--is-me": isMe,
            "message--is-typing": isTyping,
            "message__image": attachments && attachments.length === 1,
        })}>
            <div className={"message__data-wrap"}>
                <div className="message__avatar">
                    <img src={avatar} alt="user avatar"/>
                </div>
                <div className="message__content">
                    {(text || isTyping) && <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && <div className="message__typing">
                            <span className="dot one"/>
                            <span className="dot two"/>
                            <span className="dot three"/>
                        </div>}
                    </div>}
                    {
                        attachments && attachments.length > 0 &&
                        <div className={"message__attachments"}>
                            {attachments.map((attachment, i) => {
                                return (
                                    <div className={"message__attachments-item"} key={i}>
                                        <img src={attachment.url} alt={attachment.fileName}/>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                {isMe && isRead && <img className={"message__icon-read"} src={read} alt=""/>}
                {isMe && !isRead && <img className={"message__icon-read"} src={noRead} alt=""/>}
            </div>
            {date && <span className="message__date">{formatDistanceToNow(date, {locale: ukLocale})}</span>}
        </div>
    );
};

AudioMessage.defaultProps = {
    user: {},
    isRead: false
};

AudioMessage.propsTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.boolean
}
export default AudioMessage;