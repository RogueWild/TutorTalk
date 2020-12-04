import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
import Sidebar from '../comps/Sidebar';
import Chat from '../comps/Chat';
import Button from '../comps/Button';

import { useRouter } from 'next/router';

export default function forumStudent() {

    return (
        <div>
            <LogoHeader displayIcon={true} />
            <Nav />
            <div className="forumStudent_main">
                <div className="search_bar">
                    <SearchBar placeholder="Search Chats by Subject" />
                </div>
                <div className="forum_main">
                    <Sidebar />
                    <div className="chats" >
                        <div className="chat_box">
                            <h2>Accounting</h2>
                            <div className="chat_comp">
                                <Chat username="Matt" time="Yesterday at 5:42 PM" chatText="What is tuple?" />
                                <Chat username="Chris Young" time="Today at 6:15 PM" chatText="I don’t know" />
                            </div>
                            <textarea className="reply_input" type="text" >

                            </textarea>
                            <div className="reply_button">
                                <Button text="Add Reply" />
                            </div>
                        </div>
                        <div className="chat_box">
                            <h2>Computer Science</h2>
                            <div className="chat_comp">
                                <Chat username="Matt" time="Yesterday at 6:12 PM" chatText="Can someone explain nested loops?" />
                                <Chat username="Chris Young" time="Today at 6:32 PM" chatText="Sure. Nested loops are..... and here’s an example:" />
                            </div>
                            <textarea className="reply_input" type="text" >

                            </textarea>
                            <div className="reply_button">
                                <Button text="Add Reply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}