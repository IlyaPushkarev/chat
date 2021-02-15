import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import orderBy from "lodash/orderBy";
import isToday from 'date-fns/isToday';

import './dialogs.scss';
import {Time, StatusReadingMessage, DialogItem} from "../../components/index";

const Dialogs = ({items, userId}) => {
    // debugger
    return (
        <div className={classNames("dialogs")}>
            {
                orderBy(items,["message.created_at"],["desc"]).map((item, i)=>{
                // debugger
                return(
                    <DialogItem
                        message={item.message}
                        isMe={item.message.user.id === userId}
                        key={i}/>
                )
            })
            }
        </div>
    );
};

Dialogs.propTypes = {
};

export default Dialogs;