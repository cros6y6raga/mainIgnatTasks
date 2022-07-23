import React from 'react'
import sty from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={sty.header}>
            <img className={sty.avatar} src={props.avatar} alt="avatar"/>
            <div className={sty.header__title}>
                <div className={sty.name}>{props.name}</div>
                <div className={sty.other}>
                    <div className={sty.message}>{props.message}</div>
                    <div className={sty.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
