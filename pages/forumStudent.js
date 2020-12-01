import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
import Sidebar from '../comps/Sidebar';
import Chat from '../comps/Chat';
import Button from '../comps/Button';

import * as network from '../network';

export default function forumStudent() {

    const HandleProfile = async () => {
        var resp = await network.viewTutorProfile;
    }

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
                                <Chat username="Matt" time="Yesterday at 5:42 PM" chatText="I don’t understand what accrual accounting is" />
                                <Chat username="Chris Young" time="Today at 5:42 PM" chatText="I don’t understand what accrual accounting is"  />
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
                                <Chat username="Matt" time="Yesterday at 5:42 PM" chatText="Can someone explain nested for loops?" />
                                <Chat username="Chris Young" time="Today at 5:42 PM" chatText="Sure. Nested for loops are..... and here’s an example:"  />
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