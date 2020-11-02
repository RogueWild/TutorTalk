import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ChatBox = styled.div`
    max-width:70%;
    display:flex;
    margin-bottom:50px;
    margin-left:${props => props.indent ? props.indent : "0"};
`;

const ProfilePic = styled.img`
    max-width: 80px;
    max-height: 80px;
    cursor:pointer;
    margin-right:20px;
`;

const QCont = styled.div`
    display:flex;
    flex-direction:column;

    .title {
        display:flex;
        align-items:baseline;

        .user-name {
            font-weight:700;
            font-size:22px;
            margin-right:20px;
        }

        .time {
            font-size:12px;
            color:#393939;
        }
    }

    .chat-text {
        font-size:18px; 
        margin-top:2px;
    }

    .reply {
        font-size: 12px;
        cursor:pointer;
        margin-top:10px;
        color:#393939;
        max-width:10%;

        &:hover {
            font-weight:bold;
        }
    }
`;

const Chat = ({ username, time, chatText, userImg, indent }) => {

    return <ChatBox indent={indent}>
        <ProfilePic src={userImg} />
        <QCont>

            <div className="title">
                <div className="user-name">
                    {username}
                </div>
                <div className="time">
                    {time}
                </div>
            </div>

            <div className="chat-text">
                {chatText}
            </div>

            <div className="reply">
                Reply
            </div>

        </QCont>
    </ChatBox>
}

Chat.defaultProps = {
    userImg: "/profile_template.png",
    username: "Username",
    time: "post time",
    chatText: "Chat Text",
    indent:"0px"
}

export default Chat;