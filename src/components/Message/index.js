import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import intervalToDuration from "date-fns/intervalToDuration";
import ukLocale from "date-fns/locale/uk";
import classnames from "classnames";

import convertTime from "../../utils/helpers/converTimeAudio";
import read from "../../assets/img/readed.svg";
import noRead from "../../assets/img/noReaded.svg";
import "./message.scss";

const Message = ({
                     avatar,
                     text,
                     date,
                     isMe,
                     isRead,
                     attachments,
                     isTyping,
                     audio
                 }) => {
        const [progress, setProgress] = useState(0);
        const [currentTime, setCurrentTime] = useState(0);
        const [isPlay, setPlay] = useState(false);
        const [audioDuration, setAudioDuration] = useState(0)
        const audioEl = useRef(null);

        const togglePlay = (isPlay) => {
            !isPlay ? audioEl.current.play() : audioEl.current.pause();
        }

        useEffect(() => {
            if (audio) {
                audioEl.current.addEventListener("loadeddata", () => {
                    audioEl.current && audioEl.current.duration && setAudioDuration(audioEl.current.duration)
                });
                audioEl.current.addEventListener("ended", () => {
                    setPlay(isPlay);
                    setProgress(0);
                });
                audioEl.current.addEventListener("timeupdate", () => {
                    const duration = audioEl.current && audioEl.current.duration || 0;

                    setCurrentTime(audioEl.current.currentTime);
                    setProgress((audioEl.current.currentTime / duration) * 100);
                });
            }

            return () => {

            }
        }, [])

        return (
            <div className={classnames("message", {
                "message--is-me": isMe,
                "message--is-typing": isTyping,
                "message--is-audio": audio,
                "message__image": attachments && attachments.length === 1,
            })}>
                <div className={"message__data-wrap"}>
                    <div className="message__avatar">
                        {avatar && <img src={avatar} alt="user avatar"/>}
                    </div>
                    <div className="message__content">
                        {(audio || text || isTyping) && <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && <div className="message__typing">
                                <span className="dot one"/>
                                <span className="dot two"/>
                                <span className="dot three"/>
                            </div>}
                            {audio && <div className={"message__audio"}>
                                <audio src={audio} ref={audioEl} preload={'auto'}/>
                                <div className="message__audio-progress" style={{width: progress + "%"}}/>
                                <div className={classnames("message__audio-btn", {"play": !isPlay, "pause": isPlay})}
                                     onClick={() => {
                                         togglePlay(isPlay);
                                         setPlay(!isPlay);
                                     }}/>
                                <div className="message__audio-wave"/>
                                <div className="message__audio-duration">
                                    <p>{currentTime > 0 ? convertTime(currentTime) : convertTime(audioDuration)}</p>
                                </div>
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
    }
;

Message.defaultProps = {
    user: {},
    isRead: false
};

Message.propsTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.boolean
}
export default Message;